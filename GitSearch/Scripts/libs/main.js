(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gitrepos/gitrepos.component */ "./src/app/gitrepos/gitrepos.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'Repos' },
    { path: 'Repos', component: _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_2__["GitreposComponent"] },
    { path: 'Bookmarks', component: _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_3__["BookmarksComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h2>\n    GitHub Search Web App\n  </h2>\n</div>\n<nav>\n    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" role=\"tab\" routerLink=\"Repos\" routerLinkActive=\"active\">Search</a>\n        <a class=\"nav-item nav-link\" id=\"nav-bookmarks-tab\" data-toggle=\"tab\" role=\"tab\" routerLink=\"Bookmarks\" routerLinkActive=\"active\">Bookmarks</a>\n      </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.service */ "./src/app/github.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(gitService) {
        this.gitService = gitService;
    }
    AppComponent.prototype.searchRepos = function () {
        this.gitService.searchRepos(this.searchInput);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gitrepos/gitrepos.component */ "./src/app/gitrepos/gitrepos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gitrepos_gitrepo_gitrepo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gitrepos/gitrepo/gitrepo.component */ "./src/app/gitrepos/gitrepo/gitrepo.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _gitrepos_gitrepos_component__WEBPACK_IMPORTED_MODULE_4__["GitreposComponent"],
                _gitrepos_gitrepo_gitrepo_component__WEBPACK_IMPORTED_MODULE_6__["GitrepoComponent"],
                _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_8__["BookmarksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.css":
/*!***************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.html":
/*!****************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" >\n        <div *ngFor=\"let git of gitRepoList\"  class=\"col-lg-3 col-md-4 col-sm-6 portfolio-item\">\n            <app-gitrepo [allowBookmark]=\"false\" [gitRepo]=\"git\" (bookmarkClicked)=\"bookmark($event)\" ></app-gitrepo>\n        </div>\n        <div *ngIf=\"!gitRepoList\" class=\"col-12 text-center\">\n            <h4>There are no bookmarked repos yet.</h4>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../github.service */ "./src/app/github.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarksComponent = /** @class */ (function () {
    function BookmarksComponent(gitService) {
        this.gitService = gitService;
    }
    BookmarksComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load all bookmarked repos from API (session)
        this.gitService.loadBookmarks().subscribe(function (data) {
            console.log('data: ', data);
            _this.gitRepoList = data;
        });
    };
    BookmarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookmarks',
            template: __webpack_require__(/*! ./bookmarks.component.html */ "./src/app/bookmarks/bookmarks.component.html"),
            styles: [__webpack_require__(/*! ./bookmarks.component.css */ "./src/app/bookmarks/bookmarks.component.css")]
        }),
        __metadata("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]])
    ], BookmarksComponent);
    return BookmarksComponent;
}());



/***/ }),

/***/ "./src/app/git-repo-info.ts":
/*!**********************************!*\
  !*** ./src/app/git-repo-info.ts ***!
  \**********************************/
/*! exports provided: GitRepoInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitRepoInfo", function() { return GitRepoInfo; });
var GitRepoInfo = /** @class */ (function () {
    function GitRepoInfo() {
    }
    return GitRepoInfo;
}());



/***/ }),

/***/ "./src/app/github.service.ts":
/*!***********************************!*\
  !*** ./src/app/github.service.ts ***!
  \***********************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = /** @class */ (function () {
    function GithubService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Search and return the github API for the first 10 repositories containing the search term
     * @param searchTerm
     */
    GithubService.prototype.searchRepos = function (searchTerm) {
        return this.httpClient.get('https://api.github.com/search/repositories?q=' + searchTerm + '&page=1&per_page=10').
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) {
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
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/gitrepos/gitrepo/gitrepo.component.css":
/*!********************************************************!*\
  !*** ./src/app/gitrepos/gitrepo/gitrepo.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gitrepos/gitrepo/gitrepo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/gitrepos/gitrepo/gitrepo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"card h-100\">\n      <a href=\"#\"><img class=\"card-img-top\" [src]=\"gitRepo.owner.avatar_url\" alt=\"\"></a>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">\n         {{gitRepo.name}}\n        </h5>\n        <p *ngIf=\"allowBookmark\" class=\"card-text\">\n            <button (click)=\"bookmark()\" class=\"btn btn-primary\">Bookmark</button>\n          </p>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/gitrepos/gitrepo/gitrepo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/gitrepos/gitrepo/gitrepo.component.ts ***!
  \*******************************************************/
/*! exports provided: GitrepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitrepoComponent", function() { return GitrepoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _git_repo_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../git-repo-info */ "./src/app/git-repo-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitrepoComponent = /** @class */ (function () {
    function GitrepoComponent() {
        this.allowBookmark = true;
        this.bookmarkClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GitrepoComponent.prototype.ngOnInit = function () {
    };
    /**
     * Emit to the parent that this repo needed to be bookmarked
     */
    GitrepoComponent.prototype.bookmark = function () {
        this.bookmarkClicked.emit(this.gitRepo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gitRepo'),
        __metadata("design:type", _git_repo_info__WEBPACK_IMPORTED_MODULE_1__["GitRepoInfo"])
    ], GitrepoComponent.prototype, "gitRepo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('allowBookmark'),
        __metadata("design:type", Object)
    ], GitrepoComponent.prototype, "allowBookmark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('bookmarkClicked'),
        __metadata("design:type", Object)
    ], GitrepoComponent.prototype, "bookmarkClicked", void 0);
    GitrepoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gitrepo',
            template: __webpack_require__(/*! ./gitrepo.component.html */ "./src/app/gitrepos/gitrepo/gitrepo.component.html"),
            styles: [__webpack_require__(/*! ./gitrepo.component.css */ "./src/app/gitrepos/gitrepo/gitrepo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GitrepoComponent);
    return GitrepoComponent;
}());



/***/ }),

/***/ "./src/app/gitrepos/gitrepos.component.css":
/*!*************************************************!*\
  !*** ./src/app/gitrepos/gitrepos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gitrepos/gitrepos.component.html":
/*!**************************************************!*\
  !*** ./src/app/gitrepos/gitrepos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"container\">\n        <br/>\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-10 col-lg-8\">\n                <form class=\"card card-sm\">\n                    <div class=\"card-body row no-gutters align-items-center\">\n                        <div class=\"col-auto\">\n                            <i class=\"fas fa-search h4 text-body\"></i>\n                        </div>\n                        <!--end of col-->\n                        <div class=\"col\">\n                            <input name=\"searchInput\" [(ngModel)]=\"searchInput\" class=\"form-control form-control-lg form-control-borderless\" type=\"search\" placeholder=\"Search topics or keywords\">\n                        </div>\n                        <!--end of col-->\n                        <div class=\"col-auto\">\n                            <button (click)=\"searchRepos()\" class=\"btn btn-lg btn-success\" type=\"submit\">Search</button>\n                        </div>\n                        <!--end of col-->\n                    </div>\n                </form>\n            </div>\n            <!--end of col-->\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"row\" >\n            <div *ngFor=\"let git of gitRepoList\"  class=\"col-lg-3 col-md-4 col-sm-6 portfolio-item\">\n                <app-gitrepo [gitRepo]=\"git\" (bookmarkClicked)=\"bookmark($event)\" ></app-gitrepo>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/gitrepos/gitrepos.component.ts":
/*!************************************************!*\
  !*** ./src/app/gitrepos/gitrepos.component.ts ***!
  \************************************************/
/*! exports provided: GitreposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitreposComponent", function() { return GitreposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../github.service */ "./src/app/github.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitreposComponent = /** @class */ (function () {
    function GitreposComponent(gitService) {
        this.gitService = gitService;
        this.gitRepoList = new Array();
    }
    GitreposComponent.prototype.ngOnInit = function () {
    };
    /**
     * Set the result of the repo search from the service to local list
     */
    GitreposComponent.prototype.searchRepos = function () {
        var _this = this;
        this.gitService.searchRepos(this.searchInput).subscribe(function (data) {
            _this.gitRepoList = data;
        });
    };
    /**
     * Calls the service bookmark method with the selected repo as arg
     * @param gitItem
     */
    GitreposComponent.prototype.bookmark = function (gitItem) {
        this.gitService.bookmarkRepo(gitItem);
    };
    GitreposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gitrepos',
            template: __webpack_require__(/*! ./gitrepos.component.html */ "./src/app/gitrepos/gitrepos.component.html"),
            styles: [__webpack_require__(/*! ./gitrepos.component.css */ "./src/app/gitrepos/gitrepos.component.css")]
        }),
        __metadata("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_1__["GithubService"]])
    ], GitreposComponent);
    return GitreposComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Developer\ASP.NET\Research\ngGitHouse-master\ngGitHouse\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map