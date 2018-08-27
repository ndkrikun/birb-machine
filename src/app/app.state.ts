import { SlotsMachineState } from './reducers/slots-machine/slots-machine.state';
import { WalletState } from './reducers/wallet/wallet.state';

export interface AppState {
  slotsMachine: SlotsMachineState;
  wallet: WalletState;
}
