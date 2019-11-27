import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoPassoComponent } from './quinto-passo.component';

describe('QuintoPassoComponent', () => {
  let component: QuintoPassoComponent;
  let fixture: ComponentFixture<QuintoPassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintoPassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
