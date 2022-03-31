import { HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book!: Book;

  constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.bookService.getBook(params.id);
    }) 
    this.bookService.bookChangedEvent.subscribe(book => {
      this.book = book;
    })

  }

  onDelete() {
    this.bookService.deleteBook(this.book.id)
    this.router.navigate(['/'], {relativeTo: this.route})
  }


}
