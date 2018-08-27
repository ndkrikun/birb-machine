import { Action } from '@ngrx/store';
import { ActiveSlotPair } from 'src/app/models/slots.model';
import { SlotsMachineActionTypes } from 'src/app/reducers/slots-machine/slots-machine.action-types';
import { SlotsMachineState } from 'src/app/reducers/slots-machine/slots-machine.state';

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

      console.log(pair);

      if (!!pair) {
        section.activeElementIndex = pair.slotIndex;
      }
      return section;
    });

    return {
      ...state,
      sections,
    };
  }
}
