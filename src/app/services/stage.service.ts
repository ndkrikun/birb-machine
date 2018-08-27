import { Injectable } from '@angular/core';
import { StageNames } from '../models/stage.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  /**
   * Tells if stage is start
   */
  public isStart(name: StageNames): boolean {
    return name === StageNames.START;
  }

  /**
   * Tells if stage is place bet
   */
  public isPlaceBet(name: StageNames): boolean {
    return name === StageNames.PLACE_BET;
  }

  /**
   * Tells if satage is game
   */
  public isGame(name: StageNames): boolean {
    return name === StageNames.GAME;
  }

  /**
   * Tells if stage is end
   */
  public isEnd(name: StageNames): boolean {
    return name === StageNames.END;
  }
}
