import { Component, OnInit } from '@angular/core';
import { IControl, BaseControl } from '../base-control';
import { DoThing } from '../models/dynamic-form.model';
@Component({
  template: ``
})

export class DFSpaceComponent extends BaseControl implements OnInit, IControl {
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
