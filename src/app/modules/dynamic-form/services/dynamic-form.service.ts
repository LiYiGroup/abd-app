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

            if (item.validator) {
                if (item.validator.isRequired) {
                    validateFuns.push(Validators.required);
                }

                if (item.validator.maxLength > 0) {
                    validateFuns.push(Validators.maxLength(item.validator.maxLength));
                }

                if (item.validator.minLength > 0) {
                    validateFuns.push(Validators.minLength(item.validator.minLength));
                }

                if (item.validator.email) {
                    validateFuns.push(Validators.email);
                }

                if (item.validator.regularExpress) {
                    validateFuns.push(Validators.pattern(item.validator.regularExpress.value));
                }

            }

            ta.setValidators(validateFuns);
            group[item.key] = ta;
        });
        return new FormGroup(group);
    }
}
