import { Component, OnInit } from '@angular/core';
import { IControl } from '../base-control';
import { DoThing } from '../models/dynamic-form.model';
@Component({
  template: `<nz-form-item nz-row>
              <nz-form-control [nzSpan]="24">
                <button [style.float]="{}" nz-button nzType="primary" type="submit">{{model.label}}</button>
              </nz-form-control>
             </nz-form-item>`
})

export class DFSubmitComponent implements OnInit, IControl {
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
