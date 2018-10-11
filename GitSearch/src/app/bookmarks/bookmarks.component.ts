import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  public gitRepoList;

  constructor(
    private gitService: GithubService
  ) { }

  ngOnInit() {
    // Load all bookmarked repos from API (session)
    this.gitService.loadBookmarks().subscribe((data) => {
      console.log('data: ', data);
      this.gitRepoList = data;
  });
  }

}
