import { Component, OnInit, Input } from '@angular/core';
import { TextboxFieldItem } from '../../models/dynamic-form.model';
import { BaseControl } from '../../base-control';

@Component({
  selector: 'app-df-textbox',
  templateUrl: './df-textbox.component.html',
  styleUrls: ['./df-textbox.component.css']
})

export class DFTextboxComponent extends BaseControl implements OnInit {
  @Input() model: TextboxFieldItem;
  constructor() {
    super();
  }
  ngOnInit() {
  }
}
