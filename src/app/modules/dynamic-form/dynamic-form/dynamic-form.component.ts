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
    columns: 2,
    fields:
      [
        { key: 'username1', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username2', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username3', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username4', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username5', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username6', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username7', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username8', label: 'username', value: null, controlType: dfControlType.textbox },
        { key: 'username9', label: 'username', value: null, controlType: dfControlType.textbox }
      ]
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({});
  }
}
