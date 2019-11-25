import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoPassoComponent } from './quarto-passo.component';

describe('QuartoPassoComponent', () => {
  let component: QuartoPassoComponent;
  let fixture: ComponentFixture<QuartoPassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartoPassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartoPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
