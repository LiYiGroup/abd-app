
export class FieldItem {
    key: string;
    value?: any;
    controlType?: string;
    label: string;
    placeholder: string;
    validator?: DfValidation;

    constructor(options: FieldItem) {
        if (options) {
            this.key = options.key;
            this.value = options.value;
            this.controlType = options.controlType;
            this.label = options.label;
            this.placeholder = options.placeholder;
            this.validator = options.validator;
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
    constructor() {
        super(null);
        this.controlType = dfControlType.space;
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
    submit: 'submit'
};

