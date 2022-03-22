import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksChangedEvent.subscribe(books => {
      this.books = books;
    })
  }

}
