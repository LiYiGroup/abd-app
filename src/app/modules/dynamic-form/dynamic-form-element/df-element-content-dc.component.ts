import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FieldItem, dfControlType } from '../models/dynamic-form.model';
import { BaseControl, IControl } from '../base-control';
import { ControlHostDirective } from '../../../directives/control-host.directive';
import { DFTextboxComponent } from '../controls/textbox/df-textbox.component';
import { DFNoSupportComponent } from '../controls/df-nosupport.component';

@Component({
  selector: 'df-element-content-dc',
  templateUrl: './df-element-content-dc.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DFElementContentDCComponent extends BaseControl implements OnInit {
  @Input() everyFeild: FieldItem;
  @ViewChild(ControlHostDirective) host: ControlHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentType());
    let viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    let co = (<IControl>componentRef.instance);
    if (co) {
      co.control = this.control;
      co.model = this.everyFeild;
    }
  }

  private getComponentType() {
    switch (this.everyFeild.controlType) {
      case dfControlType.textbox: return DFTextboxComponent;
      default: return DFNoSupportComponent;
    }
  }
}
