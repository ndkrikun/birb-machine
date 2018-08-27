import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SlotsMachineComponent } from './slots-machine.component';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('SlotsMachineComponent', () => {
  let component: SlotsMachineComponent;
  let fixture: ComponentFixture<SlotsMachineComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
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
