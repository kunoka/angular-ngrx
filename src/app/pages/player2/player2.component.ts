import { SetCurrentIndex } from './../../store/actions/player.actions';
import { AppStoreModule } from './../../store/store.module';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getCurrentIndex } from './../../store/selectors';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.less']
})
export class Player2Component implements OnInit {
  public currentIndex: number;
  constructor (private store$: Store<AppStoreModule>) {
    this.store$.dispatch(SetCurrentIndex({ currentIndex: 1 }));
    this.store$.select('player' as any).subscribe(item => {
      console.log(item, '当前播放的');
    })
  }

  ngOnInit() {
  }
  public setCurrent(): void {
    // 获取值
    const appStore$ = this.store$.pipe(select('player' as any));
    appStore$.pipe(select(getCurrentIndex)).subscribe(item => {
      console.log(item, '当前的值');
      this.currentIndex = ++item;
    })
    // 设置当前的值
    this.store$.dispatch(SetCurrentIndex({ currentIndex: this.currentIndex }));
  }
}
