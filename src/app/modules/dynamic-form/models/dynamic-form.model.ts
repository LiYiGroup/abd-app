
export class FieldItem {
    key: string;
    value: any;
    controlType: string;
    label: string;
    placeholder: string;
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
    datepicker: 'datepicker'
};

