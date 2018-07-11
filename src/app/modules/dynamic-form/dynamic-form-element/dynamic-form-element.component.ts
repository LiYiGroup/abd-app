import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldItem, dfControlType } from '../models/dynamic-form.model';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementComponent implements OnInit {
  @Input() everyFeild: FieldItem;
  controlsTypes = dfControlType;
  @Input() formGroup: FormGroup;
  @Input() mode: string;

  get control() { return this.formGroup.controls[this.everyFeild.key]; }

  constructor() {
  }

  ngOnInit() {
  }

}
