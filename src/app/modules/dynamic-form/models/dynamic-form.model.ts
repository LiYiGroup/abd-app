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

export class TextboxFieldItem extends FieldItem {
    isMultipleLine: boolean;

    constructor() {
        super();
    }
}

export const dfControlType = {
    textbox: 'textbox',
    selection: 'selection',
    datepicker: 'datepicker'
};

