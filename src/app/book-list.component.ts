import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  term: string;
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.bookService.booksChangedEvent.subscribe(books => {
      this.books = books;
    })
  }

  search(value: string) {
    this.term = value
  }

  sort(value: string) {
    if (value === 'title') {
      this.books.sort((a, b) => {
        
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    } else if (value === 'author') {
      this.books.sort((a, b) => {
        if (a.author < b.author) {
          return -1;
        }
        if (a.author > b.author) {
          return 1;
        }
        return 0;
      })
    } else if (value === 'rating') {
      this.books.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        }
        if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      })
    }
  }
   
}
