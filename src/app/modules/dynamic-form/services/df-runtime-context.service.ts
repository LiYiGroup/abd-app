import { Injectable } from '@angular/core';
import { IControl } from '../base-control';

@Injectable()
export class DFRuntimeContextService {
    private _components: Array<IControl> = [];

    addComponents(c: IControl) {
        if (!this._components.some(x => x.model.key === c.model.key)) {
            this._components.push(c);
        }
    }

    getComponent(key: string): IControl {
        return this._components.find(x => x.model.key === key);
    }
}
