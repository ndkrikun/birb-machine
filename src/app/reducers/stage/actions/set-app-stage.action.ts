import { Action } from '@ngrx/store';
import { StageActionTypes } from '../stage.action-types';
import { StageState } from '../stage.state';
import { StageNames } from '../../../models/stage.model';

/**
 * Sets app stage name
 */
export class SetAppStageAction implements Action {

  public readonly type = StageActionTypes.SET_APP_STAGE;

  constructor(
    public payload: StageNames,
  ) { }

  public reduce(this: void, state: StageState, action: SetAppStageAction): StageState {
    return {
      ...state,
      name: action.payload,
    };
  }
}
