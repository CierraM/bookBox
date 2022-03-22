import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { BookListItemComponent } from './book-list-item.component';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
