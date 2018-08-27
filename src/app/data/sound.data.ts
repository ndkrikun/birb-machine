import { SoundInfo, SoundNames } from '../models/sound.model';

export const soundsCollection: ReadonlyArray<SoundInfo> = Object.freeze([{
  name: SoundNames.WINGS,
  fileName: 'wings.wav'
}]);

export const soundsRootPath = '/assets/sounds/';
