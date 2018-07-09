export class FieldItem {
    key: string;
    value: any;
    controlType: string;
    label: string;
}

export class FormConfig {
    columns: number;
    fields: FieldItem[];
}

export const dfControlType = {
    textbox: 'textbox',
    selection: 'selection',
    textarea: 'textarea',
    datepicker: 'datepicker'
};

