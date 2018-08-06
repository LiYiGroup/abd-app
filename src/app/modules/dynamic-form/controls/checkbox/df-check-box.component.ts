import { Component, OnInit, Input } from '@angular/core';
import { CheckBoxItem } from '../../models/dynamic-form.model';
import { BaseControl, IControl } from '../../base-control';
import { DoThing } from '../../models/dynamic-form.model';
import { FormControl } from '../../../../../../node_modules/@angular/forms';

@Component({
  templateUrl: './df-check-box.component.html',
  styleUrls: ['./df-check-box.component.css']
})

export class DFCheckboxComponent extends BaseControl implements OnInit, IControl {
  @Input() model: CheckBoxItem;
  constructor() {
    super();
  }

  ngOnInit() {
    const fc = (this.control as FormControl);
  }

  Do(thing: DoThing) {
    console.log(thing);
    return null;
  }

  getValue(key) {
    if (this.model.value && this.model.value.some(x => x === key)) {
      return true;
    } else {
      return false;
    }
  }

  onMultipleChange(values: any) {
    const fc = (this.control as FormControl);
    fc.setValue(values, { emitEvent: true });
  }
}
