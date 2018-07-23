import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormConfig } from '../models/dynamic-form.model';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../services/dynamic-form.service';
import { DFRuntimeContextService } from '../services/df-runtime-context.service';

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

  private rows: number[];
  private columns: number[];

  constructor(private _dfService: DynamicFormService, public context: DFRuntimeContextService) { }

  ngOnInit() {
    if (this.formConfig && this.validateFormConfig()) {
      this.rows = this.getArrayFromNum(Math.ceil((this.formConfig.fields.length) / (this.formConfig.columns)), 0);
      this.columns = this.getArrayFromNum(this.formConfig.columns, 0);

      this.formConfig.fields.forEach(eachField => {
        if (this.initialModel) {
          eachField.value = this.initialModel[eachField.key] || eachField.value;
        }
      });

      this.formGroup = this._dfService.toFormGroup(this.formConfig.fields);
      this.formInited.emit(this.formGroup);
    }
  }

  private getArrayFromNum(num: number, start: number): number[] {
    const ret = [];
    for (let i = 0; i < num; i++) {
      ret.push(i + start);
    }
    return ret;
  }

  onSubmit() {
    this.formSubmit.emit();
  }

  private getRealIndex(rowidx, colidx) {
    return rowidx * this.formConfig.columns + colidx;
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

    return true;
  }
}
