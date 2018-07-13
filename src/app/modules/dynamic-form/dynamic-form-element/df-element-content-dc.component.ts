import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FieldItem, dfControlType } from '../models/dynamic-form.model';
import { BaseControl, IControl } from '../base-control';
import { ControlHostDirective } from '../../../directives/control-host.directive';
import { DFTextboxComponent } from '../controls/textbox/df-textbox.component';
import { DFNoSupportComponent } from '../controls/df-nosupport.component';
import { DFRuntimeContextService } from '../services/df-runtime-context.service';
@Component({
  selector: 'df-element-content-dc',
  templateUrl: './df-element-content-dc.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DFElementContentDCComponent extends BaseControl implements OnInit {
  @Input() everyFeild: FieldItem;
  @ViewChild(ControlHostDirective) host: ControlHostDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private _context: DFRuntimeContextService) {
    super();
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
