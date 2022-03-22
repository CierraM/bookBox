import { EventEmitter, Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  booksChangedEvent = new EventEmitter<Book[]>();
  constructor(private http: HttpClient) { 
    this.books = [];
  }

  getBooks() {
    this.http.get<{ message: string, books: Book[] }>('http://localhost:3000/books').subscribe((books: any) => {
      //success
      this.books = books.map(book => {
        return {...book, id: book._id.toString()}
      })
      this.booksChangedEvent.next(this.books.slice());
    }, (err) => {
      //error
      console.log(err)
    })
    return this.books.slice();
  }

  getBook(id: string): any {
    let selected;
    if (this.books.length > 0) {
      this.books.forEach(book => {
        if (book.id === id) {
          selected = book
        }
      })
      return selected;  
    }
    else {
      let newBook
      this.http.get('http://localhost:3000/books/' + id).subscribe((book: any) => {
        newBook = book
      })
      return newBook;
    }
   
  }

  deleteBook(id: string) {

  }
}
