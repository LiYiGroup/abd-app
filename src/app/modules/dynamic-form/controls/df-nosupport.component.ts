import { Component, OnInit } from '@angular/core';
import { IControl } from '../base-control';
import { DoThing } from '../models/dynamic-form.model';
@Component({
  template: `<span>不支持此控件</span>`
})

export class DFNoSupportComponent implements OnInit, IControl {
  model: any;
  control: any;

  constructor() {
  }
  ngOnInit() {
  }

  Do(thing: DoThing) {
    console.log(thing);
    return null;
  }
}
