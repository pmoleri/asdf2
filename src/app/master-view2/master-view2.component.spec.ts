import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterView2Component } from './master-view2.component';

describe('MasterView2Component', () => {
  let component: MasterView2Component;
  let fixture: ComponentFixture<MasterView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
