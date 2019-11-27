import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { Book1Component } from './pages/book1/book1.component';
import { Player2Component } from './pages/player2/player2.component';
import { Book2Component } from './pages/book2/book2.component';

@NgModule({
  declarations: [AppComponent, Book1Component, Player2Component, Book2Component],
  imports: [BrowserModule, AppRoutingModule, AppStoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
