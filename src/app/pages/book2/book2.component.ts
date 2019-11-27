import { BookType, delBook } from '../../store/actions';
import { AppStoreModule } from '../../store/store.module';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getBookList } from 'src/app/store/selectors';

@Component({
  selector: 'app-book2',
  templateUrl: './book2.component.html',
  styleUrls: ['./book2.component.less']
})
export class Book2Component implements OnInit {
  public bookList: Array<BookType>
  constructor (private store: Store<AppStoreModule>) {
    this.store.pipe(select('book' as any), select(getBookList)).subscribe(item => {
      console.log(item, '当前的书籍');
      this.bookList = item;
    })
  }

  ngOnInit() {
  }
  public delBook(book: BookType): void {
    this.store.dispatch(delBook({ book }));
  }
}
