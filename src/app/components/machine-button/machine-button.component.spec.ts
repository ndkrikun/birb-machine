import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineButtonComponent } from './machine-button.component';

describe('MachineButtonComponent', () => {
  let component: MachineButtonComponent;
  let fixture: ComponentFixture<MachineButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
