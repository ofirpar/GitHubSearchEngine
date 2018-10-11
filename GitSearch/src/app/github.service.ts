import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { GitRepoInfo } from './git-repo-info';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
   
    constructor(private httpClient: HttpClient) { }

    /**
     * Search and return the github API for the first 10 repositories containing the search term
     * @param searchTerm
     */
    searchRepos(searchTerm): Observable<any[]> {
        return this.httpClient.get('https://api.github.com/search/repositories?q='+searchTerm+'&page=1&per_page=10'). // https://api.github.com/users/mithunvp/repos`).
            pipe(
                map(function(item: any) { console.log('item', item) ;
                    return item.items;
                    // .map(function(p) { 
                    //     console.log('p', p) ;
                    //     return p
                    //     // <GitRepoInfo>
                    //     // {
                    //     //     id: p.id,
                    //     //     name: p.name,
                    //     //     avatar_url: p.owner.avatar_url
                    //     // }
                    // });
                })
            );            
    }

    /**
     * Bookmark the selected repo using the API (into the session)
     * @param gitItem 
     */
    bookmarkRepo(gitItem: any)  {
        return this.httpClient.post('api/github', gitItem).toPromise().then(res =>
            console.log('great!!', res)
        )
            .catch(res =>
                console.log('bad!!', res)
            );;
            // https://api.github.com/users/mithunvp/repos`).
    }
    
    /**
     * Load all bookmarks from API (session)
     */
    loadBookmarks(): Observable<GitRepoInfo>{
        return this.httpClient.get('api/github').
            pipe(
                map(function(item: any) { console.log('item', item) ;
                    return !item ? null : item.map(function(p) { 
                        console.log('p', p) ;
                        return p
                        // <GitRepoInfo>
                        // {
                        //     id: p.id,
                        //     name: p.name,
                        //     avatar_url: p.avatar_url
                        // }
                    });
                })
            ); 
    }
}
