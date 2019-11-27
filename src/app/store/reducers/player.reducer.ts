import { Song, SetPlaying, SetPlayList, SetSongList, SetCurrentIndex } from '../actions/player.actions'
import { createReducer, on, Action } from '@ngrx/store'

export interface PlayState {
  playing: boolean;
  songList: Song[];
  playList: Song[];
  currentIndex: number;
}

export const initialState: PlayState = {
  playing: false,
  songList: [],
  playList: [],
  currentIndex: -1,
}

const reducer = createReducer(
  initialState,
  on(SetPlaying, (state, { playing }) => ({ ...state, playing })),
  on(SetPlayList, (state, { playList }) => ({ ...state, playList })),
  on(SetSongList, (state, { songList }) => ({ ...state, songList })),
  on(SetCurrentIndex, (state, { currentIndex }) => ({ ...state, currentIndex })),
)

export function playerReducer(state: PlayState, action: Action) {
  return reducer(state, action);
}
