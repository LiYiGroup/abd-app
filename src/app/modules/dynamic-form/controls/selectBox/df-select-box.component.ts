import { Component, OnInit, Input } from '@angular/core';
import { SelectionBoxItem } from '../../models/dynamic-form.model';
import { BaseControl, IControl } from '../../base-control';
import { DoThing } from '../../models/dynamic-form.model';

@Component({
  templateUrl: './df-select-box.component.html',
  styleUrls: ['./df-select-box.component.css']
})

export class DFSelectboxComponent extends BaseControl implements OnInit, IControl {
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
