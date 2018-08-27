import { Injectable } from '@angular/core';
import { StageNames } from '../models/stage.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  public isStart(name: StageNames): boolean {
    return name === StageNames.START;
  }

  public isPlaceBet(name: StageNames): boolean {
    return name === StageNames.PLACE_BET;
  }

  public isGame(name: StageNames): boolean {
    return name === StageNames.GAME;
  }

  public isEnd(name: StageNames): boolean {
    return name === StageNames.END;
  }
}
