import { inject } from '@angular/core/testing';
import { StageService } from './stage.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';
import { StageNames } from '../models/stage.model';

describe('StageService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([StageService], (service: StageService) => {
    expect(service).toBeTruthy();
  }));

  it('is start game stage', inject([StageService], (service: StageService) => {
    expect(service.isStart(StageNames.START)).toBeTruthy();
  }));

  it('is place bet game stage', inject([StageService], (service: StageService) => {
    expect(service.isPlaceBet(StageNames.PLACE_BET)).toBeTruthy();
  }));

  it('is game inprogress stage', inject([StageService], (service: StageService) => {
    expect(service.isGame(StageNames.GAME)).toBeTruthy();
  }));

  it('is end game stage', inject([StageService], (service: StageService) => {
    expect(service.isEnd(StageNames.END)).toBeTruthy();
  }));
});
