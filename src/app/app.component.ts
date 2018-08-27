import { Component } from '@angular/core';
import { StageService } from './services/stage.service';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Application title
   */
  public readonly title = 'Welcome to the birb machine!';

  /**
   * Current app's stage
   */
  public stage$ = this.store.select(
    ({ stage: { name } }) => name
  );

  /**
   * Tells if current stage is place bet
   */
  public isPlaceBetStage$ = this.stage$.pipe(
    map(stage => this.stageDefiner.isPlaceBet(stage))
  );

  /**
   * Tells if current stage is game
   */
  public isGameStage$ = this.stage$.pipe(
    map(stage => this.stageDefiner.isGame(stage))
  );

  constructor(
    private readonly store: Store<AppState>,
    private readonly stageDefiner: StageService,
  ) { }
}
