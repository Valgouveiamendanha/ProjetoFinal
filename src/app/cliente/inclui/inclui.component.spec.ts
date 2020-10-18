import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluiComponent } from './inclui.component';

describe('IncluiComponent', () => {
  let component: IncluiComponent;
  let fixture: ComponentFixture<IncluiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
