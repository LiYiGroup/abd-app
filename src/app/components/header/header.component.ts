import { Component, OnInit, Input } from '@angular/core';
import { CustomItem } from '../../modules/dynamic-form/models/dynamic-form.model';
import { BaseControl, IControl } from '../../modules/dynamic-form/base-control';
import { DoThing } from '../../modules/dynamic-form/models/dynamic-form.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseControl implements OnInit, IControl {
  @Input() model: CustomItem;
  constructor() {
    super();
  }
  ngOnInit() {
  }

  Do(thing: DoThing) {
    console.log(thing);
    return null;
  }
}
