import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { playerReducer, PlayState } from './player.reducer';
import { BookState, bookReducer } from './book.reducer';

// 项目中全部的状态
export interface State {
  player: PlayState,
  book: BookState
}

// 全部的reducer函数
export const reducers: ActionReducerMap<State> = {
  player: playerReducer,
  book: bookReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
