import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkFlatpickr } from '../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { SpkSalesCard } from '../../../@spk/reusable-dashboards/spk-sales-card/spk-sales-card';
import { SpkApexChart } from '../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';
import *as sales from "../../../shared/data/dashboard/sales"

@Component({
  selector: 'app-sales',
  imports: [SharedModule, CommonModule,NgbModule,RouterModule,SpkFlatpickr,SpkSalesCard,SpkApexChart,SpkDropdowns,CommonModule,SpkReusableTables,
    FormsModule, ReactiveFormsModule],
  providers:[FlatpickrDefaults],
  templateUrl: './sales.html',
  styleUrl: './sales.scss'
})
export class Sales {
  salesData: any = sales

  inlineDatePicker: boolean = false;
  weekNumbers!: true
  flatpickrOptions: any = {
    inline: true,
  };

  constructor(private cdr: ChangeDetectorRef) {}
  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };

  ngOnInit() {
    this.cdr.detectChanges();
  }

  allTasksChecked!: boolean;
toggleSelectAll(event: Event) {
  this.allTasksChecked = (event.target as HTMLInputElement).checked;
}
handleToggleSelectAll(checked: boolean) {
  this.salesData.orders.forEach((order:any) => order.checked = checked);
  this.allTasksChecked = checked;
}

}

