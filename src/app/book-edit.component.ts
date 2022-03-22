import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
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
      this.originalBook = this.bookService.getBook(params['id']);
      if (!this.originalBook) {
        return
      }
      this.editMode = true;
      this.book = JSON.parse(JSON.stringify(this.originalBook));

    })
  }

  onSubmit(form) {

  }

}
