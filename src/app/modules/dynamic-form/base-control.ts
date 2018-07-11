import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';

export class BaseControl {
    @Input() control: FormControl;
}
