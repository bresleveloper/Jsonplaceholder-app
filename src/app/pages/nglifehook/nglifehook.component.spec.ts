import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglifehookComponent } from './nglifehook.component';

describe('NglifehookComponent', () => {
  let component: NglifehookComponent;
  let fixture: ComponentFixture<NglifehookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglifehookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglifehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
