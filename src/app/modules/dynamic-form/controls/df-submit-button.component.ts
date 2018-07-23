import { Component, OnInit } from '@angular/core';
import { IControl, BaseControl } from '../base-control';
import { DoThing } from '../models/dynamic-form.model';
@Component({
  template: `<nz-form-item nz-row>
              <nz-form-control [nzSpan]="24">
                <button nz-button nzType="primary" type="submit" [disabled]="canSubmit">{{model.label}}</button>
              </nz-form-control>
             </nz-form-item>`
})

export class DFSubmitComponent extends BaseControl implements OnInit, IControl {
  model: any;
  get canSubmit() {
    return this.control.invalid || this.control.pending;
  }
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
