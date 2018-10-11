import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitRepoInfo } from '../../git-repo-info';

@Component({
  selector: 'app-gitrepo',
  templateUrl: './gitrepo.component.html',
  styleUrls: ['./gitrepo.component.css']
})
export class GitrepoComponent implements OnInit {
  @Input('gitRepo') gitRepo: GitRepoInfo;
  @Input('allowBookmark') allowBookmark = true;
  @Output('bookmarkClicked') bookmarkClicked = new EventEmitter<GitRepoInfo>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit to the parent that this repo needed to be bookmarked
   */
  bookmark() {
    this.bookmarkClicked.emit(this.gitRepo);
  }

}
