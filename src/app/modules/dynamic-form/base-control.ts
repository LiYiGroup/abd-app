import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DoThing } from './models/dynamic-form.model';

export class BaseControl {
    @Input() control: FormControl;
}

export interface IControl {
    control: FormControl;
    model: any;

    Do: (thing: DoThing) => string;
}
