import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccyInputComponent } from '../accy-input/accy-input.component';

describe('AccyInputComponent', () => {
  let component: AccyInputComponent;
  let fixture: ComponentFixture<AccyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
