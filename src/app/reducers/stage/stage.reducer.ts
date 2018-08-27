import { StageActionTypes } from './stage.action-types';
import { SetAppStageAction } from 'src/app/reducers/stage/actions/set-app-stage.action';
import { StageState } from './stage.state';
import { StageNames } from '../../models/stage.model';

const stageDefaultState: StageState = {
  name: StageNames.PLACE_BET,
};

type StageActions = (
  | SetAppStageAction
);

export function stageReducer(
  this: void,
  state = stageDefaultState,
  action: StageActions,
): StageState {
  switch (action.type) {
    case StageActionTypes.SET_APP_STAGE: return action.reduce(state, action);
    default: return state;
  }
}
