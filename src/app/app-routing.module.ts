import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';
import { BookListComponent } from './book-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent, pathMatch: 'full' },
  { path: 'create', component: BookEditComponent},
  { path: ':id', component: BookDetailComponent },
  { path: ':id/edit', component: BookEditComponent },

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
