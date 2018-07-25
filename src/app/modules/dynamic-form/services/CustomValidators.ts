import { AbstractControl, ValidatorFn } from '@angular/forms';

export const CustomValidators = {
    matchRegExp: (rex: RegExp, msg: string): ValidatorFn => {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const isMatch = rex.test(control.value);
            return isMatch ? null : { 'matchRegExp': { value: control.value, msg: msg } };
        };
    }
};
