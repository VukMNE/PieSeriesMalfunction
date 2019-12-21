import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, FormControl, AbstractControl } from '@angular/forms';
import { ModalDialogParams } from 'nativescript-angular';


@Component({
  selector: 'ns-report-date-settings-modal',
  templateUrl: './report-date-settings-modal.component.html'
})
export class ReportDateSettingsModalComponent implements OnInit {
  @ViewChild('weekCb', { static: false }) weekCheckBox: ElementRef;
  @ViewChild('monthCb', { static: false }) monthCheckBox: ElementRef;
  @ViewChild('yearCb', { static: false }) yearCheckBox: ElementRef;
  reportForm: FormGroup;
  reportType: string;

  constructor(private fb: FormBuilder,
              private params: ModalDialogParams) { }

  ngOnInit() {
    this.createReportForm();
    this.reportType = this.params.context.reportType;
  }

  createReportForm() {
    this.reportForm = this.fb.group({
      reportType: [null, Validators.required]
    });
  }

  selectType(type: string, isChecked) {
    let selectedValue = '';
    switch (type) {
      case 'W':
        if (isChecked) {
          this.monthCheckBox.nativeElement.checked = false;
          this.yearCheckBox.nativeElement.checked = false;
        } else {
            this.weekCheckBox.nativeElement.checked = true;
        }
        selectedValue = 'week';
        break;
      case 'M':
        if (isChecked) {
          this.weekCheckBox.nativeElement.checked = false;
          this.yearCheckBox.nativeElement.checked = false;
        } else {
            this.monthCheckBox.nativeElement.checked = true;
        }
        selectedValue = 'month';
        break;
      case 'Y':
        if (isChecked) {
          this.monthCheckBox.nativeElement.checked = false;
          this.weekCheckBox.nativeElement.checked = false;
        } else {
            this.yearCheckBox.nativeElement.checked = true;
        }
        selectedValue = 'year';
        break;
    }

    this.reportForm.controls.reportType.setValue(selectedValue);
    this.params.closeCallback(this.reportForm.value);
  }


}
