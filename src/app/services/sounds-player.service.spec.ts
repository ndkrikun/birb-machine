import { inject } from '@angular/core/testing';
import { SoundsPlayerService } from './sounds-player.service';
import { AppConfigureTestingModule } from 'src/app/app.testing';

describe('SoundsPlayerService', () => {
  beforeEach(() => {
    AppConfigureTestingModule().compileComponents();
  });

  it('should be created', inject([SoundsPlayerService], (service: SoundsPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
