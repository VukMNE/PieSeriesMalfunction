import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TransactionsMyGroupPieChartRow } from '../shared/models/TransactionsMyGroupPieChartRow';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Color } from 'tns-core-modules/color/color';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular';
import { ReportDateSettingsModalComponent } from '../shared/components/report-date-settings-modal/report-date-settings-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  isLoading = false;
  noDataFound = false;
  fromDate: Date;
  toDate: Date;
  reportType: string; // 'week' | 'month' | 'year'
  fromDateString: string;
  toDateString: string;
  reportDates: string;
  chartColors = [
                          new Color('#1B998B'),
                          new Color('#97C8EB'),
                          new Color('#001F54'),
                          new Color('#2B193D'),
                          new Color('#484D6D'),
                          new Color('#2C365E')
                         ];
  monthNames = [
    {me: 'Januar', en: 'January'},
    {me: 'Februar', en: 'February'},
    {me: 'Mart', en: 'March'},
    {me: 'April', en: 'April'},
    {me: 'Maj', en: 'May'},
    {me: 'Jun', en: 'June'},
    {me: 'Jul', en: 'July'},
    {me: 'Avgust', en: 'August'},
    {me: 'Septembar', en: 'September'},
    {me: 'Oktobar', en: 'October'},
    {me: 'Novembar', en: 'November'},
    {me: 'Decembar', en: 'December'}
  ];
  monthCodes = [
                  {me: 'JAN', en: 'JAN'},
                  {me: 'FEB', en: 'FEB'},
                  {me: 'MAR', en: 'MAR'},
                  {me: 'APR', en: 'APR'},
                  {me: 'MAJ', en: 'MAY'},
                  {me: 'JUN', en: 'JUN'},
                  {me: 'JUL', en: 'JUL'},
                  {me: 'AVG', en: 'AUG'},
                  {me: 'SEP', en: 'SEP'},
                  {me: 'OKT', en: 'OCT'},
                  {me: 'NOV', en: 'NOV'},
                  {me: 'DEC', en: 'DEC'},
                ];
  private _pieSourceCollected: ObservableArray<TransactionsMyGroupPieChartRow>;
  private _pieSourceSpent: ObservableArray<TransactionsMyGroupPieChartRow>;


  constructor(
              private modalService: ModalDialogService,
              private translate: TranslateService,
              private vcRef: ViewContainerRef) { 
    this.reportType = 'year';
    this.toDate = new Date();
    this.fromDate = new Date(this.toDate.getFullYear(), 0, 1);
    this.reportDates = this.toDate.getFullYear() + '';
  }

  ngOnInit() {
    this.setDateStrings();
    this.syncData();
  }

  get pieSourceCollected(): ObservableArray<TransactionsMyGroupPieChartRow> {
    return this._pieSourceCollected;
  }

  get pieSourceSpent(): ObservableArray<TransactionsMyGroupPieChartRow> {
    return this._pieSourceSpent;
  }

  setDateStrings() {
    // tslint:disable-next-line: max-line-length
    this.fromDateString = this.fromDate.getDate() + '.' + (this.fromDate.getMonth() + 1) + '.' + this.fromDate.getFullYear();
    // tslint:disable-next-line: max-line-length
    this.toDateString = this.toDate.getDate() + '.' + (this.toDate.getMonth() + 1) + '.' + this.toDate.getFullYear();
  }

  onReportOptionsClicked() {
    this.createModalView().then((result: any) => {
      if(result != null && result !== undefined && result !== 'cancel') {
        this.reportType = result.reportType;
        this.onReportTypeChanged();
        // this.syncData();
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  createModalView(): Promise<any> {
    const options: ModalDialogOptions = {
        viewContainerRef: this.vcRef,
        fullscreen: false,
        animated: true,
        context: {
          reportType: this.reportType,
        }
    };

    return this.modalService.showModal(ReportDateSettingsModalComponent, options);
  }

  onReportTypeChanged() {
    console.log('Not important for example');
  }

  syncData() {
    let data: Array<TransactionsMyGroupPieChartRow>;
    data = [
      {
        userId: 1,
        username: "User 1",
        amountCollected: 29,
        amountSpent: 23
      },
      {
        userId: 1,
        username: "User 2",
        amountCollected: 11,
        amountSpent: 0
      }
    ];

    this._pieSourceCollected = new ObservableArray(data);
    this._pieSourceSpent = new ObservableArray(data);
  }

  goBack() {
    console.log('Not important for example');
  }

  goForward() {
    console.log('Not important for example');
  }
}
