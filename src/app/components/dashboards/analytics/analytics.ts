import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { SpkApexChart } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { AverageData, MetricsData, SessionDeviceData, WeekData } from '../../../shared/data/dashboard/dashboard_charts';
import { SpkAnalyticsCard } from '../../../@spk/reusable-dashboards/spk-analytics-card/spk-analytics-card';
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [NgbModule,SharedModule,CommonModule,SpkAnalyticsCard,SpkApexChart,SpkReusableTables,SpkDropdowns],
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss'
})
export class Analytics {

  public SessionDeviceData = SessionDeviceData;
  public MetricsData = MetricsData;
  public WeekData = WeekData;
  public AverageData = AverageData;

  stats = [
    {
      title: 'Total Users',
      value: '42,643',
      percentageChange: '0.45%',
      changeType: 'up' as 'down',
      period: 'This Year',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path></g></svg>`,
      colorClass: 'avatar-md bg-primary svg-white'
    },
    {
      title: 'Total Sessions',
      value: '143K',
      percentageChange: '2.76%',
      changeType: 'up' as 'down',
      period: 'This Year',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"></path></svg>`,
      colorClass: 'avatar-md bg-secondary svg-white'
    },
    {
      title: 'Bounce Rate',
      value: '91.6%',
      percentageChange: '3.85%',
      changeType: 'up' as 'down',
      period: 'This Year',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><g><path d="M7.5,11C9.43,11,11,9.43,11,7.5S9.43,4,7.5,4S4,5.57,4,7.5S5.57,11,7.5,11z M7.5,6C8.33,6,9,6.67,9,7.5S8.33,9,7.5,9 S6,8.33,6,7.5S6.67,6,7.5,6z"></path></g></g><g><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)" width="20.63" x="1.69" y="11"></rect></g><g><g><path d="M16.5,13c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S18.43,13,16.5,13z M16.5,18 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S17.33,18,16.5,18z"></path></g></g></g></g></svg>`,
      colorClass: 'avatar-md bg-success svg-white'
    },
    {
      title: 'Avg Session Duration',
      value: '2m 27s',
      percentageChange: '2.44%',
      changeType: 'down' as 'up',
      period: 'This Year',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><g><rect fill="none" height="24" width="24"></rect></g><g><g><rect height="2" width="6" x="9" y="1"></rect><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M13,14h-2V8h2V14z"></path></g></g></svg>`,
      colorClass: 'avatar-md bg-warning svg-white'
    }
  ];
  CountriesHeader = [
    {header:'S.No'},
    {header:'Country'},
    {header:'Visitors'}
  ]
  countries = [
    {
      rank: 1,
      flagUrl: './assets/images/flags/us_flag.jpg',
      name: 'USA',
      percentageChange: '2.15%',
      value: "45,234",
      changeType: 'up',
    },
    {
      rank: 2,
      flagUrl: './assets/images/flags/argentina_flag.jpg',
      name: 'Argentina',
      percentageChange: '1.62%',
      value: "12,234",
      changeType: 'up',
    },
    {
      rank: 3,
      flagUrl: './assets/images/flags/italy_flag.jpg',
      name: 'Italy',
      percentageChange: '0.85%',
      value: "7,234",
      changeType: 'down',
    },
    {
      rank: 4,
      flagUrl: './assets/images/flags/russia_flag.jpg',
      name: 'Russia',
      percentageChange: '3.51%',
      value: "3,543",
      changeType: 'up',
    },
    {
      rank: 5,
      flagUrl: './assets/images/flags/spain_flag.jpg',
      name: 'Spain',
      percentageChange: '0.56%',
      value: "2,463",
      changeType: 'up',
    },
    {
      rank: 6,
      flagUrl: './assets/images/flags/uae_flag.jpg',
      name: 'Uae',
      percentageChange: '1.92%',
      value: "1,832",
      changeType: 'up',
    }
  ];

  CampaignsHeader = [
    {header:'Provider'},
    {header:'Sales'},
    {header:'Goal'},
    {header:'Status'},
    {header:'Action'},
  ]
  influencers = [
    {
      rank: 1,
      avatarUrl: './assets/images/faces/1.jpg',
      name: 'Leo Phillips',
      role: 'Influencer',
      totalEarnings: '$12,465',
      percentageChange: '23.3%',
      status: 'On Process',
       percentageColor:'primary'
    },

    {
      rank: 2,
      avatarUrl: './assets/images/faces/2.jpg',
      name: 'Noah Russell',
      role: 'Influencer',
      totalEarnings: '$3,576',
      percentageChange: '19.4%',
      status: 'Achieved',
       percentageColor:'secondary'
    },
    {
      rank: 3,
      avatarUrl: './assets/images/faces/3.jpg',
      name: 'Henry Morgan',
      role: 'Youtuber',
      totalEarnings: '$12,764',
      percentageChange: '12.76%',
      status: 'On Process',
       percentageColor:'success'
    },
    {
      rank: 4,
      avatarUrl: './assets/images/faces/4.jpg',
      name: 'Ava Taylor',
      role: 'Content Creator',
      totalEarnings: '$13,864',
      percentageChange: '16.78%',
      status: 'Achieved',
      percentageColor:'warning'
    },
    {
      rank: 5,
      avatarUrl: './assets/images/faces/5.jpg',
      name: 'Liam Parker',
      role: 'Youtuber',
      totalEarnings: '$9,756',
      percentageChange: '6.13%',
      status: 'Achieved',
       percentageColor:'info'
    }
  ];
  EngagementHeader = [
    {header:'S.No',tableHeadColumn:'text-center'},
    {header:'User'},
    {header:'Sessions'},
    {header:'Country'},
    {header:'Page Views'},
    {header:'Bounce Rate'},
    {header:'Conversion Rate',tableHeadColumn:'text-center'}
  ]
  users  = [
    {
      rank: 1,
      avatarUrl: './assets/images/faces/12.jpg',
      name: 'John Doe',
      country: 'United States',
      countryFlagUrl: './assets/images/flags/us_flag.jpg',
      totalSales: 120,
      pageView:350,
      salesPercentage: '45%',
      returnPercentage: '5.2%',
    },
    {
      rank: 2,
      avatarUrl: './assets/images/faces/1.jpg',
      name: 'Jane Smith',
      country: 'Germany',
      countryFlagUrl: './assets/images/flags/germany_flag.jpg',
      totalSales: 95,
      pageView:240,
      salesPercentage: '38%',
      returnPercentage: '6.8%',
    },
    {
      rank: 3,
      avatarUrl: './assets/images/faces/14.jpg',
      name: 'Chris Johnson',
      country: 'Canada',
      countryFlagUrl: './assets/images/flags/canada_flag.jpg',
      totalSales: 110,
      pageView:290,
      salesPercentage: '40%',
      returnPercentage: '4.5%',
    },
    {
      rank: 4,
      avatarUrl: './assets/images/faces/4.jpg',
      name: 'Emily Davis',
      country: 'Argentina',
      countryFlagUrl: './assets/images/flags/argentina_flag.jpg',
      totalSales: 75,
      pageView:200,
      salesPercentage: '50%',
      returnPercentage: '3.8%',
    },
    {
      rank: 5,
      avatarUrl: './assets/images/faces/15.jpg',
      name: 'Michael Brown',
      country: 'India',
      countryFlagUrl: './assets/images/flags/india_flag.jpg',
      totalSales: 135,
      pageView:400,
      salesPercentage: '30%',
      returnPercentage: '7.1%',
    },
  ];
  browsers = [
    {
      name: 'Google',
      company: 'Google, Inc',
      avatarUrl: './assets/images/browsers/chrome.png',
      progressValue: 78,
      totalCount: "1,215",
      progressColor: 'bg-primary',
    },
    {
      name: 'Edge',
      company: 'Microsoft Corp, Inc',
      avatarUrl: './assets/images/browsers/edge.png',
      progressValue: 72,
      totalCount: 978,
      progressColor: 'bg-secondary',
    },
    {
      name: 'Firefox',
      company: 'Mozilla, Inc',
      avatarUrl: './assets/images/browsers/firefox.png',
      progressValue: 64,
      totalCount: 815,
      progressColor: 'bg-warning',
    },
    {
      name: 'Opera',
      company: 'Opera, Inc',
      avatarUrl: './assets/images/browsers/opera.png',
      progressValue: 58,
      totalCount: "1,347",
      progressColor: 'bg-info',
    },
    {
      name: 'Safari',
      company: 'Apple Corp, Inc',
      avatarUrl: './assets/images/browsers/safari.png',
      progressValue: 63,
      totalCount: "1,123",
      progressColor: 'bg-success',
    },
    {
      name: 'Uc Browser',
      company: 'Uc Browser, Inc',
      avatarUrl: './assets/images/browsers/uc.png',
      progressValue: 55,
      totalCount: "1,189",
      progressColor: 'bg-danger',
    }
  ];

}

