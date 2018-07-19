import { Component, OnInit } from '@angular/core';
import { IControl, BaseControl } from '../base-control';
import { DoThing } from '../models/dynamic-form.model';
@Component({
  template: `<nz-tag [nzColor]="'red'">不支持此控件</nz-tag>`
})

export class DFNoSupportComponent extends BaseControl implements OnInit, IControl {
  model: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  Do(thing: DoThing) {
    console.log(thing);
    return null;
  }
}
