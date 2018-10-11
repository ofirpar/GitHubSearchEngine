import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { GitRepoInfo } from '../git-repo-info';

@Component({
    selector: 'app-gitrepos',
    templateUrl: './gitrepos.component.html',
    styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {
    gitRepoList = new Array<any>();
    searchInput;
    constructor(private gitService: GithubService) { }

    ngOnInit() {
    }

    /**
     * Set the result of the repo search from the service to local list
     */
    public searchRepos() {
        this.gitService.searchRepos(this.searchInput).subscribe((data) => {
            this.gitRepoList = data;
        });
    }
    /**
     * Calls the service bookmark method with the selected repo as arg
     * @param gitItem 
     */
    bookmark(gitItem){
        this.gitService.bookmarkRepo(gitItem);
    }
}
