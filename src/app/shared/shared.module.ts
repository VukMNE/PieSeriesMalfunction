import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ReportDateSettingsModalComponent } from './components/report-date-settings-modal/report-date-settings-modal.component';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [ReportDateSettingsModalComponent],
  imports: [
    NativeScriptCommonModule,
    TranslateModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
