import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FieldItem, dfControlType, CustomItem } from '../models/dynamic-form.model';
import { ControlHostDirective } from '../../../directives/control-host.directive';
import { DFRuntimeContextService } from '../services/df-runtime-context.service';
import { IControl } from '../base-control';
import { DFTextboxComponent } from '../controls/textbox/df-textbox.component';
import { DFNoSupportComponent } from '../controls/df-nosupport.component';
import { DFSpaceComponent } from '../controls/df-space.component';
import { DFSubmitComponent } from '../controls/df-submit-button.component';
import { DFSelectboxComponent } from '../controls/selectBox/df-select-box.component';
import { DFDatetimePickerComponent } from '../controls/datePicker/df-datetime-picker.component';
import { DFCheckboxComponent } from '../controls/checkbox/df-check-box.component';
@Component({
  selector: 'app-dynamic-form-element',
  template: `<ng-container appControlHost></ng-container>`,
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementComponent implements OnInit {
  @Input() everyFeild: FieldItem;
  @Input() formGroup: FormGroup;
  @ViewChild(ControlHostDirective) host: ControlHostDirective;

  get control(): FormControl { return this.formGroup.controls[this.everyFeild.key] as FormControl; }

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _context: DFRuntimeContextService) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.getComponentType());
    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const co = (<IControl>componentRef.instance);
    if (co) {
      if (this.everyFeild.controlType === dfControlType.space) {
      } else if (this.everyFeild.controlType === dfControlType.submit) {
        co.control = this.formGroup;
        co.model = this.everyFeild;
      } else {
        co.control = this.control;
        co.model = this.everyFeild;
        this._context.addComponents(co);
      }
    }
  }

  private getComponentType() {
    switch (this.everyFeild.controlType) {
      case dfControlType.textbox: return DFTextboxComponent;
      case dfControlType.selection: return DFSelectboxComponent;
      case dfControlType.datepicker: return DFDatetimePickerComponent;
      case dfControlType.checkbox: return DFCheckboxComponent;
      case dfControlType.space: return DFSpaceComponent;
      case dfControlType.submit: return DFSubmitComponent;
      case dfControlType.custom: return (this.everyFeild as CustomItem).component;
      default: return DFNoSupportComponent;
    }
  }

}
