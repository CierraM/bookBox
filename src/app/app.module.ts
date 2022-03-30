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
import { StarDisplayComponent } from './star-display/star-display.component';
import { BooksFilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailComponent,
    BookEditComponent,
    StarDisplayComponent,
    BooksFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
