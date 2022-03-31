import { EventEmitter, Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private selectedBook: Book;
  booksChangedEvent = new EventEmitter<Book[]>();
  bookChangedEvent = new EventEmitter<Book>();
  constructor(private http: HttpClient) {
    this.books = [];
  }

  getBooks() {
    this.http.get<{ message: string, books: Book[] }>('http://localhost:3000/books').subscribe((books: any) => {
      //success
      this.books = books
      this.booksChangedEvent.emit(this.books.slice());
    }, (err) => {
      //error
      console.log(err)
    })
    return this.books.slice();
  }

  getBook(id: string): any {
    if (this.books.length > 0) {
      this.selectedBook = this.books.find(book => book._id === id);
      this.bookChangedEvent.emit(this.selectedBook);
    }
    this.http.get('http://localhost:3000/books/' + id).subscribe((book: any) => {
      this.selectedBook = book;
      this.bookChangedEvent.emit(this.selectedBook);
    })
  }

  deleteBook(id: string) {
    this.http.delete('http://localhost:3000/books/' + id).subscribe(response => {
      this.getBooks();
    })
  }

  addBook(newBook: Book) {
    if (!newBook) {
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post<{ message: string, book: Book }>('http://localhost:3000/books',
    newBook,
    { headers: headers })
    .subscribe(
      (responseData) => {
        // add new contact to contacts
        this.books.push(responseData.book);
        this.booksChangedEvent.next(this.books.slice())
      }
    );
  }

  updateBook(originalBook: Book, newBook: Book) {
    if (!originalBook || !newBook) {
      console.log('no book to update');
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/books/' + originalBook._id,
      newBook, { headers: headers })
      .subscribe(
        (response: Response) => {
          
          this.booksChangedEvent.emit(this.books.slice());
          this.getBooks();
        }
    );
    this.getBooks();

    
  }
}


