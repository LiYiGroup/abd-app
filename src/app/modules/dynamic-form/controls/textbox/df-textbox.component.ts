import { Component, OnInit, Input } from '@angular/core';
import { TextboxItem } from '../../models/dynamic-form.model';
import { BaseControl, IControl } from '../../base-control';
import { DoThing } from '../../models/dynamic-form.model';

@Component({
  templateUrl: './df-textbox.component.html',
  styleUrls: ['./df-textbox.component.css']
})

export class DFTextboxComponent extends BaseControl implements OnInit, IControl {
  @Input() model: TextboxItem;
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
