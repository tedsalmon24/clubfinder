import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matched2Component } from './matched2.component';

describe('Matched2Component', () => {
  let component: Matched2Component;
  let fixture: ComponentFixture<Matched2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Matched2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matched2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
