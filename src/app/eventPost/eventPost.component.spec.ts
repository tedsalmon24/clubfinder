import { ComponentFixture, TestBed } from '@angular/core/testing';

import { eventPostComponent } from './eventPost.component';

describe('eventPostComponent', () => {
  let component: eventPostComponent;
  let fixture: ComponentFixture<eventPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ eventPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(eventPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
