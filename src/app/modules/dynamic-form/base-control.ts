import { Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoThing } from './models/dynamic-form.model';

export class BaseControl {
    @Input() control: FormControl | FormGroup;
}

export interface IControl {
    control: FormControl | FormGroup;
    model: any;

    Do: (thing: DoThing) => string;
}
