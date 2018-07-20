import { Injectable } from '@angular/core';
import { ST } from './service-int';
@Injectable()
export class Test2Service implements ST {

  constructor() { }
  getTest() {
    return 'Test2';
  }
}
