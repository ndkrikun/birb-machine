import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsMachineComponent } from './slots-machine.component';

describe('SlotsMachineComponent', () => {
  let component: SlotsMachineComponent;
  let fixture: ComponentFixture<SlotsMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotsMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
