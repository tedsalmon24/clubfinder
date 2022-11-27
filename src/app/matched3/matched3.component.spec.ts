import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matched3Component } from './matched3.component';

describe('Matched3Component', () => {
  let component: Matched3Component;
  let fixture: ComponentFixture<Matched3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matched3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matched3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
