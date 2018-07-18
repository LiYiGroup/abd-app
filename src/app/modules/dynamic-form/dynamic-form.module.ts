import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormElementComponent } from './dynamic-form-element/dynamic-form-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DynamicFormService } from './services/dynamic-form.service';
import { DFTextboxComponent } from './controls/textbox/df-textbox.component';
import { ControlHostDirective } from '../../directives/control-host.directive';
import { DFNoSupportComponent } from './controls/df-nosupport.component';
import { DFSpaceComponent } from './controls/df-space.component';
import { DFSubmitComponent } from './controls/df-submit-button.component';

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
      ControlHostDirective,
      DFNoSupportComponent,
      DFSpaceComponent,
      DFSubmitComponent
    ],
  exports: [DynamicFormComponent],
  providers: [DynamicFormService],
  entryComponents: [DFTextboxComponent, DFNoSupportComponent, DFSubmitComponent, DFSpaceComponent]
})
export class DynamicFormModule { }
