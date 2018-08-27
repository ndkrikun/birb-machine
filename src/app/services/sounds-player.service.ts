import { Injectable } from '@angular/core';
import { SoundInfo, SoundNames } from '../models/sound.model';
import { soundsCollection, soundsRootPath } from '../data/sound.data';

interface SoundFile extends SoundInfo {
  element: HTMLAudioElement;
}

@Injectable({
  providedIn: 'root'
})
export class SoundsPlayerService {
  /**
   * Audio files info collection
   */
  private readonly soundsInfoCollection: ReadonlyArray<SoundInfo> = [
    ...soundsCollection
  ];

  /**
   * Audio files root folder path
   */
  private readonly rootPath = soundsRootPath;

  /**
   * Audio files collection
   */
  private readonly audioCollecion: ReadonlyArray<SoundFile> = Object.freeze(
    this.soundsInfoCollection.map(info => {
      return {
        ...info,
        element: new Audio(this.getSoundUrl(info))
      };
    })
  );

  /**
   * Returns defauld promise
   */
  public get defaultPromise(): Promise<void> {
    return new Promise<void>((resolve) => resolve());
  }

  /**
   * Returns sound url fullpath
   */
  public getSoundUrl({ fileName }: SoundInfo): string {
    return this.rootPath + fileName;
  }

  /**
   * Returns audio file by name
   */
  public getAudio(name: SoundNames): SoundFile {
    return this.audioCollecion.reduce(
      (acc, audio) => audio.name === name ? audio : acc,
      null
    );
  }

  /**
   * Plays audio file by name
   */
  public play(name: SoundNames): Promise<void> {
    const audio = this.getAudio(name);
    return !!audio
      ? audio.element.play()
      : this.defaultPromise;
  }
}
