import { Component, OnInit, Input } from '@angular/core';
import { FormConfig, dfControlType } from '../models/dynamic-form.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})

export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;

  @Input() formConfig: FormConfig = {
    columns: 4,
    fields:
      [
        { key: 'bumpName', label: '泵名称', value: null, controlType: dfControlType.textbox },
        { key: 'bumpType', label: '型号', value: null, controlType: dfControlType.textbox },
        { key: 'bumpFlow', label: '流量', value: null, controlType: dfControlType.textbox },
        { key: 'bumpLift', label: '扬程', value: null, controlType: dfControlType.textbox },
        { key: 'bumpMaterial', label: '材质', value: null, controlType: dfControlType.textbox },
        { key: 'bumpSeal', label: '机封', value: null, controlType: dfControlType.textbox }
      ]
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({});
  }
}
