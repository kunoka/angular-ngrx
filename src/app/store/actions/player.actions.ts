import { createAction, props } from '@ngrx/store';

export interface Song {
  id: number;
  name: string;
  url: string;
  dt: number;
}


export const SetPlaying = createAction('[player] set playing', props<{ playing: boolean }>());
export const SetPlayList = createAction('[player] Set playList', props<{ playList: Song[] }>());
export const SetSongList = createAction('[player] Set songList', props<{ songList: Song[] }>());
export const SetCurrentIndex = createAction('[player] Set currentIndex', props<{ currentIndex: number }>());
