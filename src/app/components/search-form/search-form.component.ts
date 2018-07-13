import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { dfControlType, FormConfig } from '../../modules/dynamic-form/models/dynamic-form.model';
import { DynamicFormComponent } from '../../modules/dynamic-form/dynamic-form/dynamic-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dForm: DynamicFormComponent;

  private _subs: Array<Subscription> = [];

  SearchFormConfig: FormConfig = {
    columns: 4,
    fields:
      [
        { key: 'bumpName', label: '泵名称', value: null, controlType: dfControlType.textbox, placeholder: '泵名称' },
        { key: 'bumpType', label: '型号', value: null, controlType: 'xx', placeholder: '泵名称' },
        { key: 'bumpFlow', label: '流量', value: null, controlType: dfControlType.textbox, placeholder: '泵名称' },
        { key: 'bumpLift', label: '扬程', value: null, controlType: dfControlType.textbox, placeholder: '泵名称' },
        { key: 'bumpMaterial', label: '材质', value: null, controlType: 'dfControlType.textbox', placeholder: '泵名称' },
        { key: 'bumpSeal', label: '机封', value: null, controlType: 'textbox', placeholder: '泵名称' }
      ]
  };

  test: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const c = this.dForm.context;
    // outside of the event-loop, refresh at the next loop
    const st = setTimeout(() => {
      c.getComponent('bumpName').control.setValue('HHHHHHHH');
      clearTimeout(st);
    }, 100);
  }

  doyourjob(form) {
    // do anything you want, you can get the whole formGroup here.
    this._subs.push(form.valueChanges.subscribe(value => {
      console.log(value);
      this.test = JSON.stringify(value);
    }));
  }

  ngOnDestroy() {
    // must unsubscribe all Subscriptions
    this._subs.filter(x => x).forEach(x => x.unsubscribe());
  }
}
