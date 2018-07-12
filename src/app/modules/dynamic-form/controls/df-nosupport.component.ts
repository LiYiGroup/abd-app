import { Component, OnInit } from '@angular/core';
import { IControl } from '../base-control';
@Component({
  template: `<span>不支持此控件</span>`
})

export class DFNoSupportComponent implements OnInit, IControl {
  model: any;
  control: any;

  constructor() {
  }
  ngOnInit() {
  }
}
