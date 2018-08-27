import { SlotsMachineState } from './reducers/slots-machine/slots-machine.state';
import { WalletState } from './reducers/wallet/wallet.state';
import { StageState } from './reducers/stage/stage.state';

export interface AppState {
  slotsMachine: SlotsMachineState;
  wallet: WalletState;
  stage: StageState;
}
