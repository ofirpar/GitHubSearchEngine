import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitreposComponent } from './gitrepos/gitrepos.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Repos' },
  { path: 'Repos', component: GitreposComponent },
  { path: 'Bookmarks', component: BookmarksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
