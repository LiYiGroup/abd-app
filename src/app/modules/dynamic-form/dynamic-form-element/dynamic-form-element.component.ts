import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FieldItem, dfControlType } from '../models/dynamic-form.model';
import { ControlHostDirective } from '../../../directives/control-host.directive';
import { DFRuntimeContextService } from '../services/df-runtime-context.service';
import { IControl } from '../base-control';
import { DFTextboxComponent } from '../controls/textbox/df-textbox.component';
import { DFNoSupportComponent } from '../controls/df-nosupport.component';

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
      co.control = this.control;
      co.model = this.everyFeild;
      this._context.addComponents(co);
    }
  }

  private getComponentType() {
    switch (this.everyFeild.controlType) {
      case dfControlType.textbox: return DFTextboxComponent;
      default: return DFNoSupportComponent;
    }
  }

}
