import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BetFormComponent } from './bet-form.component';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('BetFormComponent', () => {
  let component: BetFormComponent;
  let fixture: ComponentFixture<BetFormComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
