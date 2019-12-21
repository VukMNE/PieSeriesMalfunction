import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NativeScriptLoader } from '@danvick/ngx-translate-nativescript-loader';
import { ReportDateSettingsModalComponent } from './shared/components/report-date-settings-modal/report-date-settings-modal.component';


export function createTranslateLoader() {
  return new NativeScriptLoader('./assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader
      }
    })
  ],
  entryComponents: [
    ReportDateSettingsModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
