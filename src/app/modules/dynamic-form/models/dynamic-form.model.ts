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

export class TextboxFieldItem extends FieldItem {
    isMultipleLine: boolean;

    constructor() {
        super();
    }
}

export const dfControlType = {
    textbox: 'textbox',
    selection: 'selection',
    textarea: 'textarea',
    datepicker: 'datepicker'
};

