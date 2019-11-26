import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HookGrandsonComponent } from './hook-grandson.component';

describe('HookGrandsonComponent', () => {
  let component: HookGrandsonComponent;
  let fixture: ComponentFixture<HookGrandsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HookGrandsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HookGrandsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
