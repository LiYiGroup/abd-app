import { Component, OnInit, Input } from '@angular/core';
import { SelectionBoxItem } from '../../models/dynamic-form.model';
import { BaseControl, IControl } from '../../base-control';
import { DoThing } from '../../models/dynamic-form.model';

@Component({
  templateUrl: './df-datetime-picker.component.html',
  styleUrls: ['./df-datetime-picker.component.css']
})

export class DFDatetimePickerComponent extends BaseControl implements OnInit, IControl {
  @Input() model: SelectionBoxItem;
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
