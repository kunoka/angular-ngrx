import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { playerReducer, PlayState } from './player.reducer';
import { BookState, bookReducer } from './book.reducer';

export interface State {
  player: PlayState,
  book: BookState
}

export const reducers: ActionReducerMap<State> = {
  player: playerReducer,
  book: bookReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
