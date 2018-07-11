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
        { key: 'bumpName', label: '泵名称', value: null, controlType: dfControlType.textbox },
        { key: 'bumpType', label: '型号', value: null, controlType: dfControlType.textbox },
        { key: 'bumpFlow', label: '流量', value: null, controlType: dfControlType.textbox },
        { key: 'bumpLift', label: '扬程', value: null, controlType: dfControlType.textbox },
        { key: 'bumpMaterial', label: '材质', value: null, controlType: dfControlType.textbox },
        { key: 'bumpSeal', label: '机封', value: null, controlType: dfControlType.textbox }
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}
