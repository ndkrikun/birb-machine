import { Action } from '@ngrx/store';
import { SlotsMachineActionTypes } from '../slots-machine.action-types';
import { SlotsMachineState } from '../slots-machine.state';

interface ActiveSlotPair {
  sectionId: number;
  slotId: number;
}

/**
 * Sets active slots
 */
export class SetActiveSlotAction implements Action {

  public readonly type = SlotsMachineActionTypes.SET_ACTIVE_SLOT;

  constructor(
    public payload: ActiveSlotPair[],
  ) {}

  public reduce(this: void, state: SlotsMachineState, action: SetActiveSlotAction): SlotsMachineState {
    const sections = state.sections.map((section) => {
      const pair = action.payload.reduce(
        (acc, ids) => ids.sectionId === section.id ? ids : acc,
        null
      );
      if (!!pair) {
        section.activeElementId = pair.slotId;
      }
      return section;
    });

    return {
      ...state,
      sections,
    };
  }
}
