import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {
  FormConfig, TextboxItem,
  SelectionBoxItem, WhiteSpaceItem,
  SubmitItem, CustomItem, DatetimePickerItem
} from '../../modules/dynamic-form/models/dynamic-form.model';
import { DynamicFormComponent } from '../../modules/dynamic-form/dynamic-form/dynamic-form.component';
import { Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HeaderComponent } from '../header/header.component';

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
        new TextboxItem({
          key: 'bumpName', label: '泵名称', placeholder: '泵名称', span: 2,
          validator: {
            isRequired: true, maxLength: 7, minLength: 5
          }
        }),
        new SelectionBoxItem({
          key: 'bumpType', label: '型号', placeholder: '型号', validator: {
            isRequired: true
          }, fixedOptions: [{ value: '1', text: 'text1' }, { value: '2', text: 'text2' }, { value: '3', text: 'text3' }]
        }),
        new DatetimePickerItem({
          key: 'bumpSeal11', label: '流量', placeholder: '流量', span: 2
        }),
        new TextboxItem({
          key: 'bumpLift', label: '扬程', placeholder: '扬程'
        }),
        new TextboxItem({
          key: 'bumpMaterial', label: '材质', placeholder: '材质',
        }),
        new TextboxItem({
          key: 'bumpSeal', label: '机封', placeholder: '机封', span: 2,
          validator: {
            isRequired: true, regularExpress: { value: /^abc$/, msg: '格式非法!!!' }
          }
        }),
        new TextboxItem({
          key: 'bumpSeal22', label: '机封', placeholder: '机封',
          validator: {
            isRequired: true, regularExpress: { value: /^abc$/, msg: '格式非法!!!' }
          }
        }),
        new CustomItem({ key: 'cccc', label: 'cccc', placeholder: 'cccc', component: HeaderComponent }),
        new SubmitItem({ key: 'btn', label: '机封', placeholder: '机封' })]
  };

  initModel = {
    bumpName: 'xxxxxxxxxxxxxxxx'
  };

  isWorking = false;

  bumpSearchConditon: string;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const c = this.dForm.context;
    // outside of the event-loop, refresh at the next loop
    // const st = setTimeout(() => {
    //   c.getComponent('bumpName').control.setValue('HHHHHHHH');
    //   clearTimeout(st);
    // }, 100);
  }

  doyourjob(form) {
    // do anything you want, you can get the whole formGroup here.
    this._subs.push(form.valueChanges.subscribe(value => {
      this.bumpSearchConditon = JSON.stringify(value);
    }));
  }

  ngOnDestroy() {
    // must unsubscribe all Subscriptions
    this._subs.filter(x => x).forEach(x => x.unsubscribe());
  }

  onSubmit() {
    this.isWorking = true;

    of([]).pipe(delay(4000)).subscribe(x => this.isWorking = false);

  }
}
