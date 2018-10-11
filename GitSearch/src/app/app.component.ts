import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput;

  constructor(
    private gitService: GithubService
  ) {}

  searchRepos(){
    this.gitService.searchRepos(this.searchInput)
  }
}
