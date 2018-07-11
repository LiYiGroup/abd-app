import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FieldItem } from '../models/dynamic-form.model';

@Injectable()
export class DynamicFormService {
    toFormGroup(items: FieldItem[]): FormGroup {
        const group: any = {};
        items.forEach(item => {
            group[item.key] = new FormControl(item.value);
        });
        return new FormGroup(group);
    }
}
