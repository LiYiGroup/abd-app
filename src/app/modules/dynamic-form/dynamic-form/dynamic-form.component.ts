import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormConfig, FieldItem, dfControlType, CheckBoxItem } from '../models/dynamic-form.model';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../services/dynamic-form.service';
import { DFRuntimeContextService } from '../services/df-runtime-context.service';

class LayoutItem {
  f: FieldItem;
  span: number;
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [DFRuntimeContextService]
})

export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;
  @Input() isWorking = false;
  @Input() formConfig: FormConfig;
  @Input() initialModel: any;
  @Output() formInited = new EventEmitter<FormGroup>();
  @Output() formSubmit = new EventEmitter();

  layoutConstruction: Array<Array<LayoutItem>> = [];

  constructor(private _dfService: DynamicFormService, public context: DFRuntimeContextService) { }

  ngOnInit() {
    if (this.formConfig && this.validateFormConfig()) {
      this.constructLayout();
      this.initialFieldsValue();
      this.formGroup = this._dfService.toFormGroup(this.formConfig.fields);
      this.formInited.emit(this.formGroup);
    }
  }

  onSubmit() {
    this.formSubmit.emit();
  }

  private constructLayout() {
    this.formConfig.fields.forEach(eachF => {
      if (this.layoutConstruction.length === 0) {
        const innerRow = new Array<LayoutItem>();
        innerRow.push({ f: eachF, span: eachF.span });
        this.layoutConstruction.push(innerRow);
      } else if (this.layoutConstruction.length > 0) {
        const lastRow = this.layoutConstruction[this.layoutConstruction.length - 1];
        let lastRowHaveSpan = 0;
        lastRow.forEach(eachlf => lastRowHaveSpan += eachlf.span);
        lastRowHaveSpan += eachF.span;
        if (lastRowHaveSpan > this.formConfig.columns) {
          const innerRow = new Array<LayoutItem>();
          innerRow.push({ f: eachF, span: eachF.span });
          this.layoutConstruction.push(innerRow);
        } else {
          lastRow.push({ f: eachF, span: eachF.span });
        }
      }
    });
  }

  private initialFieldsValue() {
    this.formConfig.fields.forEach(eachField => {
      if (this.initialModel) {
        eachField.value = this.initialModel[eachField.key] || eachField.value;
      }
      if (eachField.controlType === dfControlType.checkbox) {
        const checkboxF = eachField as CheckBoxItem;
        if (checkboxF) {
          checkboxF.fixedOptions.forEach(fo => {
            fo.isSelected = false;
            if (checkboxF.value && checkboxF.value.length) {
              fo.isSelected = checkboxF.value.some(ev => ev === fo.value);
            }
          });
        }
      }
    });
  }

  private validateFormConfig() {
    if (!this.formConfig) {
      console.error('no form config!!');
      return false;
    }

    if (!this.formConfig.fields || !(this.formConfig.fields.length > 0)) {
      console.error('no fields in form config!!');
      return false;
    }

    if (!this.formConfig.columns) {
      console.error('no columns setting in form config!!');
      return false;
    }

    if (!(this.formConfig.columns === 1 || this.formConfig.columns === 2 ||
      this.formConfig.columns === 3 || this.formConfig.columns === 4)) {
      console.error('columns setting have to be 1/2/3/4 in form config!!');
      return false;
    }

    const existDuplicated = this.formConfig.fields.some((v, i, arr) => {
      return arr.some((ieach, ii) => {
        if (i !== ii) {
          return ieach.key === v.key;
        } else {
          return false;
        }
      });
    });

    if (existDuplicated) {
      console.error('duplicated key in form config!!');
      return false;
    }

    const existExceedSpan = this.formConfig.fields.some(x => x.span > this.formConfig.columns);
    if (existExceedSpan) {
      console.error('row span exceed!!');
      return false;
    }

    return true;
  }
}
