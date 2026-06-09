import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SharedModule } from '../../../shared/shared.module';
import { SpkHrmCard } from '../../../@spk/reusable-dashboards/spk-hrm-card/spk-hrm-card';
import { SpkApexChart } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';

interface AttendanceItem {
  type: string;
  count: number | string;
  className: string;
}

interface HrmCard {
  title: string;
  value: number;
}

interface HrmStats {
  id: null;
  totalEmployees: number;
  newEmployees: number;
  resignedEmployees: number;
  totalApplicants: number;
  presentToday: number;
  lateToday: number;
  absentToday: number;
  permissionToday: number;
  employeesByDepartment: Record<string, number>;
}

@Component({
  selector: 'app-hrm',
  standalone: true,
  imports: [
    NgbModule,
    SharedModule,
    CommonModule,
    SpkHrmCard,
    SpkApexChart,
    SpkDropdowns,
    SpkReusableTables
  ],
  templateUrl: './hrm.html',
  styleUrl: './hrm.scss'
})
export class Hrm implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadStats();
  }

  // ================= API CALL =================
  loadStats(): void {
    this.http.get<HrmStats>(`${environment.apiUrl}/hrm/stats`)
      .subscribe({
        next: (data) => {
          console.log('API DATA:', data);

          // Cards
          this.Hrmcards = [
            { title: 'Total Employees', value: data.totalEmployees ?? 0 },
            { title: 'New Employees', value: data.newEmployees ?? 0 },
            { title: 'Total Job Applicants', value: data.totalApplicants ?? 0 },
            { title: 'Resigned Employees', value: data.resignedEmployees ?? 0 }
          ];

          // Attendance totals for progress bar widths
          const total = (data.presentToday ?? 0) + (data.lateToday ?? 0)
            + (data.permissionToday ?? 0) + (data.absentToday ?? 0);

          this.attendanceTotal = total || 1; // avoid division by zero
          this.presentCount   = data.presentToday ?? 0;
          this.lateCount      = data.lateToday ?? 0;
          this.permissionCount = data.permissionToday ?? 0;
          this.absentCount    = data.absentToday ?? 0;

          this.AttendanceData = [
            { type: 'Present',    count: this.presentCount,    className: 'present' },
            { type: 'Late',       count: this.lateCount,       className: 'late' },
            { type: 'Permission', count: this.permissionCount, className: 'permission' },
            { type: 'Absent',     count: this.absentCount,     className: 'absent' },
          ];

          // Donut chart
          this.AttendanceOptions = {
            ...this.AttendanceOptions,
            series: [
              this.presentCount,
              this.lateCount,
              this.permissionCount,
              this.absentCount
            ]
          };

          // Bar chart — departments
          const departments = data.employeesByDepartment || {};
          this.EmployeeOptions = {
            ...this.EmployeeOptions,
            series: [{ name: 'Employees', data: Object.values(departments) }],
            xaxis: { categories: Object.keys(departments) }
          };
        },
        error: (err) => {
          console.error('Error fetching HRM stats', err);
        }
      });
  }

  // ================= CARDS =================
  Hrmcards: HrmCard[] = [
    { title: 'Total Employees', value: 0 },
    { title: 'New Employees', value: 0 },
    { title: 'Total Job Applicants', value: 0 },
    { title: 'Resigned Employees', value: 0 }
  ];

  // ================= ATTENDANCE COUNTS =================
  attendanceTotal   = 1;
  presentCount      = 0;
  lateCount         = 0;
  permissionCount   = 0;
  absentCount       = 0;

  // ================= ATTENDANCE =================
  AttendanceData: AttendanceItem[] = [];

  AttendanceOptions: any = {
    series: [0, 0, 0, 0],
    labels: ['Present', 'Late', 'Permission', 'Absent'],
    colors: ['#4f46e5', '#22c55e', '#f59e0b', '#ef4444'],
    chart: { height: 260, type: 'donut' },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        }
      }
    }
  };

  // ================= DEPARTMENTS =================
  EmployeeOptions: any = {
    series: [{ data: [], name: 'Employees' }],
    chart: { type: 'bar', height: 350, toolbar: { show: false } },
    xaxis: { categories: [] },
    colors: ['#4f46e5'],
    dataLabels: { enabled: false },
    plotOptions: {
      bar: { borderRadius: 4, horizontal: false }
    }
  };

  // ================= ATTENDANCE TABLE HEADER =================
  AttendanceHeader = [
    { header: 'Name' },
    { header: 'Time In' },
    { header: 'Status' }
  ];

  // ================= CANDIDATE CHART =================
  CandidateOptions: any = {
    series: [
      {
        name: 'Candidates Hired',
        data: [13, 23, 20, 25, 10, 13, 13, 15, 13, 23, 20, 25],
        type: 'column',
      },
      {
        name: 'Received Responses',
        data: [20, 30, 25, 50, 25, 30, 20, 35, 20, 30, 25, 50],
        type: 'column',
      },
    ],
    chart: {
      type: 'line',
      height: 306,
      toolbar: { show: false },
      zoom: { enabled: false },
      stacked: true,
    },
    colors: ['#4f46e5', '#e0e7ff'],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    }
  };

  // ================= HELPERS =================
  getProgressWidth(count: number): string {
    return `${Math.round((count / this.attendanceTotal) * 100)}%`;
  }
}
