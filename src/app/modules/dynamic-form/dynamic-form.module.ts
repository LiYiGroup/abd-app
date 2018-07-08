import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './dynamic-form-element/dynamic-form-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [DynamicFormComponent, DynamicFormElementComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
