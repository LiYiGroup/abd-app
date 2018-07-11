import { Component, OnInit, Input } from '@angular/core';
import { FieldItem, dfControlType } from '../models/dynamic-form.model';
import { BaseControl } from '../base-control';

@Component({
  selector: 'app-dynamic-form-element-content',
  templateUrl: './dynamic-form-element-content.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementContentComponent extends BaseControl implements OnInit {
  @Input() everyFeild: FieldItem;
  controlsTypes = dfControlType;
  constructor() {
    super();
  }
  ngOnInit() {
  }

}
