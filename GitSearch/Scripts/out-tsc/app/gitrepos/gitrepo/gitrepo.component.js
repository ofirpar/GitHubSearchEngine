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
var git_repo_info_1 = require("../../git-repo-info");
var GitrepoComponent = /** @class */ (function () {
    function GitrepoComponent() {
        this.allowBookmark = true;
        this.bookmarkClicked = new core_1.EventEmitter();
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
        core_1.Input('gitRepo'),
        __metadata("design:type", git_repo_info_1.GitRepoInfo)
    ], GitrepoComponent.prototype, "gitRepo", void 0);
    __decorate([
        core_1.Input('allowBookmark'),
        __metadata("design:type", Object)
    ], GitrepoComponent.prototype, "allowBookmark", void 0);
    __decorate([
        core_1.Output('bookmarkClicked'),
        __metadata("design:type", Object)
    ], GitrepoComponent.prototype, "bookmarkClicked", void 0);
    GitrepoComponent = __decorate([
        core_1.Component({
            selector: 'app-gitrepo',
            templateUrl: './gitrepo.component.html',
            styleUrls: ['./gitrepo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], GitrepoComponent);
    return GitrepoComponent;
}());
exports.GitrepoComponent = GitrepoComponent;
//# sourceMappingURL=gitrepo.component.js.map