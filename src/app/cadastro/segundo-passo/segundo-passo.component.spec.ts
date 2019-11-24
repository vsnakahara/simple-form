import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPassoComponent } from './segundo-passo.component';

describe('SegundoPassoComponent', () => {
  let component: SegundoPassoComponent;
  let fixture: ComponentFixture<SegundoPassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoPassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
