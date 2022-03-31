import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: Book;
  originalBook: Book;
  editMode: boolean = false;
  id: string;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (!params['id']) {
        this.editMode = false;
        return;
      }
      this.bookService.getBook(params['id']);
      this.bookService.bookChangedEvent.subscribe(book => {
        this.book = book;
      })
      if (!this.originalBook) {
        return
      }
      
      this.editMode = true;
      this.book = JSON.parse(JSON.stringify(this.originalBook));
    })
  }


  onSubmit(form) {
    let newBook = new Book(null, form.value.title, form.value.author, form.value.rating, form.value.description, form.value.imageUrl, form.value.dateRead);
    if (this.editMode) {
      this.bookService.updateBook(this.originalBook, newBook)
    } else {
      this.bookService.addBook(newBook);

    }
    this.router.navigate(['/'])
  }

}
