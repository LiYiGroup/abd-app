import { Component, OnInit, Input } from '@angular/core';
import { FieldItem } from '../models/dynamic-form.model';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html',
  styleUrls: ['./dynamic-form-element.component.css']
})
export class DynamicFormElementComponent implements OnInit {
  @Input() model: FieldItem;

  constructor() { }

  ngOnInit() {
  }

}
