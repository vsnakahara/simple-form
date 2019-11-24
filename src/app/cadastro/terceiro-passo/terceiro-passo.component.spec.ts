import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroPassoComponent } from './terceiro-passo.component';

describe('TerceiroPassoComponent', () => {
  let component: TerceiroPassoComponent;
  let fixture: ComponentFixture<TerceiroPassoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroPassoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroPassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
