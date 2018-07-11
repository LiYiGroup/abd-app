import { Component, OnInit, Input } from '@angular/core';
import { FormConfig } from '../models/dynamic-form.model';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../services/dynamic-form.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})

export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;

  @Input() formConfig: FormConfig;
  @Input() mode = 'form';

  constructor(private dfService: DynamicFormService) { }

  ngOnInit() {
    if (this.formConfig) {
      this.formGroup = this.dfService.toFormGroup(this.formConfig.fields);
    }
  }
}
