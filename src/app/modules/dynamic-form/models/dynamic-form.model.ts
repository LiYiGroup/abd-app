
export class FieldItem {
    key: string;
    value: any;
    controlType: string;
    label: string;
    placeholder: string;
    validator?: DfValidation;
}

export class DfValidation {
    isRequired: boolean;
    maxLength?: number;
    minLength?: number;
    email?: boolean;
    regularExpress?: {
        value: string,
        msg: string
    };
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
    textarea: 'textarea',
    selection: 'selection',
    datepicker: 'datepicker',
    space: 'space',
    submit: 'submit'
};

