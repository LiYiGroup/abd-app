
import { Type } from '@angular/core';

export class FieldItem {
    key: string;
    value?: any;
    controlType?: string;
    label: string;
    placeholder: string;
    span?: number;
    validator?: DfValidation;

    constructor(options: FieldItem) {
        if (options) {
            this.key = options.key;
            this.value = options.value;
            this.controlType = options.controlType;
            this.label = options.label;
            this.placeholder = options.placeholder;
            this.validator = options.validator;
            this.span = options.span || 1;
        }
    }
}

export class DfValidation {
    isRequired: boolean;
    maxLength?: number;
    minLength?: number;
    email?: boolean;
    regularExpress?: {
        value: RegExp,
        msg: string
    };
}

export class WhiteSpaceItem extends FieldItem {
    constructor(span: number) {
        super(null);
        this.controlType = dfControlType.space;
        this.span = span;
    }
}

export class SubmitItem extends FieldItem {
    constructor(options: SubmitItem) {
        super(options);
        this.controlType = dfControlType.submit;
    }
}

export class TextboxItem extends FieldItem {
    isMultipleLine?: boolean;
    constructor(options: TextboxItem) {
        super(options);
        this.controlType = dfControlType.textbox;
        this.isMultipleLine = !!options.isMultipleLine;
    }
}

export class DatetimePickerItem extends FieldItem {
    mode?: string;
    showTime?: boolean;
    constructor(options: DatetimePickerItem) {
        super(options);
        this.controlType = dfControlType.datepicker;
        this.mode = options.mode || 'date';
        this.showTime = !!options.showTime;
    }
}

export class SelectionBoxItem extends FieldItem {
    mode?: string;
    fixedOptions?: { value: string, text: string }[];
    remoteUrl?: string;

    constructor(options: SelectionBoxItem) {
        super(options);
        this.controlType = dfControlType.selection;
        this.mode = options.mode || 'default';
        this.fixedOptions = options.fixedOptions;
        this.remoteUrl = options.remoteUrl;
    }
}

export class CustomItem extends FieldItem {
    component: Type<any>;

    constructor(options: CustomItem) {
        super(options);
        this.controlType = dfControlType.custom;
        this.component = options.component;
    }
}


export class FormConfig {
    columns: number;
    fields: FieldItem[];
}

export class DoThing {
    constructor(public key: string, public resource: any) {
    }
}

export const dfControlType = {
    textbox: 'textbox',
    selection: 'selection',
    datepicker: 'datepicker',
    space: 'space',
    submit: 'submit',
    custom: 'custom'
};

