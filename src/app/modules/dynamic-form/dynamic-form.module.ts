import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './dynamic-form-element/dynamic-form-element.component';
import { DynamicFormElementContentComponent } from './dynamic-form-element/dynamic-form-element-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DynamicFormService } from './services/dynamic-form.service';
import { DFTextboxComponent } from './controls/textbox/df-textbox.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations:
    [
      DynamicFormComponent,
      DynamicFormElementComponent,
      DFTextboxComponent,
      DynamicFormElementContentComponent
    ],
  exports: [DynamicFormComponent],
  providers: [DynamicFormService]
})
export class DynamicFormModule { }
