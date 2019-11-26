import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookSonComponent } from './hook-son.component';

describe('HookSonComponent', () => {
  let component: HookSonComponent;
  let fixture: ComponentFixture<HookSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
