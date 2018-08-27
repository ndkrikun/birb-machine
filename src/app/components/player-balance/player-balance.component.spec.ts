import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerBalanceComponent } from './player-balance.component';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('PlayerBalanceComponent', () => {
  let component: PlayerBalanceComponent;
  let fixture: ComponentFixture<PlayerBalanceComponent>;

  beforeEach(async(() => {
    AppConfigureTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
