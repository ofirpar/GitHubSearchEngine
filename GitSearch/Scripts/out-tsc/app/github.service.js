"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var GithubService = /** @class */ (function () {
    function GithubService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Search and return the github API for the first 10 repositories containing the search term
     * @param searchTerm
     */
    GithubService.prototype.searchRepos = function (searchTerm) {
        return this.httpClient.get('https://api.github.com/search/repositories?q=' + searchTerm + '&page=1&per_page=10'). // https://api.github.com/users/mithunvp/repos`).
            pipe(operators_1.map(function (item) {
            console.log('item', item);
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
        }));
    };
    /**
     * Bookmark the selected repo using the API (into the session)
     * @param gitItem
     */
    GithubService.prototype.bookmarkRepo = function (gitItem) {
        return this.httpClient.post('api/github', gitItem).toPromise().then(function (res) {
            return console.log('great!!', res);
        })
            .catch(function (res) {
            return console.log('bad!!', res);
        });
        ;
        // https://api.github.com/users/mithunvp/repos`).
    };
    /**
     * Load all bookmarks from API (session)
     */
    GithubService.prototype.loadBookmarks = function () {
        return this.httpClient.get('api/github').
            pipe(operators_1.map(function (item) {
            console.log('item', item);
            return !item ? null : item.map(function (p) {
                console.log('p', p);
                return p;
                // <GitRepoInfo>
                // {
                //     id: p.id,
                //     name: p.name,
                //     avatar_url: p.avatar_url
                // }
            });
        }));
    };
    GithubService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GithubService);
    return GithubService;
}());
exports.GithubService = GithubService;
//# sourceMappingURL=github.service.js.map