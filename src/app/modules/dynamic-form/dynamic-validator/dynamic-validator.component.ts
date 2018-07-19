import { Component, OnInit, Input } from '@angular/core';
import { BaseControl } from '../base-control';

@Component({
  selector: 'app-dynamic-validator',
  templateUrl: './dynamic-validator.component.html',
  styleUrls: ['./dynamic-validator.component.css']
})
export class DynamicValidatorComponent extends BaseControl implements OnInit {

  @Input() targetText: string;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
