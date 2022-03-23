import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit, OnChanges {
  @Input() book: Book = { id: '', title: '', author: '', description: '', rating: 0, imageUrl: '', dateRead: new Date() };
  nums: string[] = [];
  
  constructor() { 
    
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }


  
}
