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

  @Input() formConfig: FormConfig;
  @Output() formInited = new EventEmitter<FormGroup>();

  private rows: number[];
  private columns: number[];

  constructor(private _dfService: DynamicFormService, public context: DFRuntimeContextService) { }

  ngOnInit() {
    if (this.formConfig && this.validateFormConfig()) {
      this.rows = this.getArrayFromNum(Math.ceil((this.formConfig.fields.length) / (this.formConfig.columns)), 0);
      this.columns = this.getArrayFromNum(this.formConfig.columns, 0);
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
    return true;
  }
}
