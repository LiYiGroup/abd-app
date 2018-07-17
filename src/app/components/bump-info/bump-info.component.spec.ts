import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BumpInfoComponent } from './bump-info.component';

describe('BumpInfoComponent', () => {
  let component: BumpInfoComponent;
  let fixture: ComponentFixture<BumpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BumpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
