import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.model';

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {

  transform(books: Book[], term) {
    let filteredContacts: Book[] = [];

    books.forEach(book => {
      if (book?.title.toLowerCase().includes(term) || book?.author.toLowerCase().includes(term)) {
        filteredContacts.push(book);
      }
    })
    if (filteredContacts.length === 0) {
      return books;
    } 
    return filteredContacts;
    
  }

}
