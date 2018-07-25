import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppSiderComponent } from './components/app-sider/app-sider.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';
import { BumpInfoComponent } from './components/bump-info/bump-info.component';
import { MockUpServiceConfig, RealServiceConfig } from './service-config';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    AppSiderComponent,
    HeaderComponent,
    BumpInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    DynamicFormModule
  ],
  providers:
    [
      { provide: NZ_I18N, useValue: zh_CN },
      // ...MockUpServiceConfig
      ...RealServiceConfig
    ],
  entryComponents:
    [
      HeaderComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
