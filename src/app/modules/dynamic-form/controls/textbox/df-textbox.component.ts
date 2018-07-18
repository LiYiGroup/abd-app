import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from '../../models/dynamic-form.model';
import { BaseControl, IControl } from '../../base-control';
import { DoThing } from '../../models/dynamic-form.model';

@Component({
  selector: 'app-df-textbox',
  templateUrl: './df-textbox.component.html',
  styleUrls: ['./df-textbox.component.css']
})

export class DFTextboxComponent extends BaseControl implements OnInit, IControl {
  @Input() model: FieldItem;
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
