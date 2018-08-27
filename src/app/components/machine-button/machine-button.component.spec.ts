import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineButtonComponent } from './machine-button.component';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('MachineButtonComponent', () => {
  let component: MachineButtonComponent;
  let fixture: ComponentFixture<MachineButtonComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
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
