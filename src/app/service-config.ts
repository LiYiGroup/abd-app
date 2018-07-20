import { ST } from './services/service-int';
import { Test1Service } from './services/test1.service';
import { Test2Service } from './services/test2.service';


export const MockUpServiceConfig =
    [
        { provide: ST, useClass: Test1Service }
    ];

export const RealServiceConfig =
    [
        { provide: ST, useClass: Test2Service }
    ];

