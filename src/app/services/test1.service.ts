import { Injectable } from '@angular/core';
import { ST } from './service-int';

@Injectable()
export class Test1Service implements ST {

  constructor() { }

  getTest() {
    return 'Test1';
  }
}
