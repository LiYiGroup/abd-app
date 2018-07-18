import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { FieldItem } from '../models/dynamic-form.model';

@Injectable()
export class DynamicFormService {
    toFormGroup(items: FieldItem[]): FormGroup {
        const group: any = {};
        items.forEach(item => {
            const ta = new FormControl(item.value);
            const validateFuns: ValidatorFn[] = [];
            validateFuns.push(Validators.required);
            ta.setValidators(validateFuns);
            group[item.key] = ta;
        });
        return new FormGroup(group);
    }
}
