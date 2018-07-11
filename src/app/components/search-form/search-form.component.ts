import { Component, OnInit } from '@angular/core';
import { dfControlType, FormConfig } from '../../modules/dynamic-form/models/dynamic-form.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
