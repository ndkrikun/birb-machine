import { inject } from '@angular/core/testing';
import { SoundsPlayerService } from './sounds-player.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';
import { SoundNames } from '../models/sound.model';

describe('SoundsPlayerService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([SoundsPlayerService], (service: SoundsPlayerService) => {
    expect(service).toBeTruthy();
  }));

  it('get sound url', inject([SoundsPlayerService], (service: SoundsPlayerService) => {
    const fileName = {
      name: 'Test' as SoundNames,
      fileName: 'test.mp3',
    };
    const fullpath = service.getSoundUrl(fileName);
    expect(
      fullpath.includes('/sounds') &&
      fullpath.includes('test.mp3')
    ).toBeTruthy();
  }));

  it('get sound file', inject([SoundsPlayerService], (service: SoundsPlayerService) => {
    const audio = service.getAudio(SoundNames.WINGS);
    expect(
      audio.element instanceof HTMLAudioElement
    ).toBeTruthy();
  }));

  it('play sound', inject([SoundsPlayerService], (service: SoundsPlayerService) => {
    const result = service.play(SoundNames.WINGS);
    expect(
      'then' in result
    ).toBeTruthy();
  }));
});
