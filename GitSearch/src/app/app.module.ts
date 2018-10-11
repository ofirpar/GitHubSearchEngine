import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitreposComponent } from './gitrepos/gitrepos.component';
import { FormsModule } from '@angular/forms';
import { GitrepoComponent } from './gitrepos/gitrepo/gitrepo.component';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GitreposComponent,
    GitrepoComponent,
    BookmarksComponent
  ],
  imports: [
      BrowserModule, HttpClientModule, FormsModule,  AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
