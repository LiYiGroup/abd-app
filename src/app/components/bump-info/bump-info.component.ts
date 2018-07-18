import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { dfControlType, FormConfig } from '../../modules/dynamic-form/models/dynamic-form.model';
import { DynamicFormComponent } from '../../modules/dynamic-form/dynamic-form/dynamic-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bump-info',
  templateUrl: './bump-info.component.html',
  styleUrls: ['./bump-info.component.css']
})
export class BumpInfoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dForm: DynamicFormComponent;

  private _subs: Array<Subscription> = [];

  BumpInfoConfig: FormConfig = {
    columns: 4,
    fields:
      [
        { key: 'bumpName', label: '泵名称', value: null, controlType: dfControlType.textbox, placeholder: '泵名称' },
        { key: 'bumpType', label: '型号', value: null, controlType: dfControlType.textbox, placeholder: '型号' },
        { key: 'bumpFlow', label: '流量', value: null, controlType: dfControlType.textbox, placeholder: '流量' },
        { key: 'bumpLift', label: '扬程', value: null, controlType: dfControlType.textbox, placeholder: '扬程' },
        { key: 'bumpMaterial', label: '材质', value: null, controlType: dfControlType.textbox, placeholder: '材质' },
        { key: 'bumpSeal', label: '机封', value: null, controlType: dfControlType.textbox, placeholder: '机封' }
      ]
  };

  bumpSearchConditon: string;

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
      this.bumpSearchConditon = JSON.stringify(value);
    }));
  }

  ngOnDestroy() {
    // must unsubscribe all Subscriptions
    this._subs.filter(x => x).forEach(x => x.unsubscribe());
  }

  ngSubmit(form) {
    console.log(form.value);
  }
}
