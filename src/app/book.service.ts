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
        return { ...book, id: book._id.toString() }
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
      return;
    }
    let pos = this.books.indexOf(originalBook)

    if (pos < 0) {
      return;
    }

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/books/' + originalBook.id,
      newBook, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.books[pos] = newBook;
          this.booksChangedEvent.next(this.books.slice());
        }
    );
    this.getBooks();
    
  }
}


