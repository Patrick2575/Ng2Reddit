import { Component } from '@angular/core';
import { Article } from './shared/models/article'

@Component({
    selector: 'my-app',
    templateUrl:'./app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent{
    articles: Article[];

    constructor()
    {
        this.articles = [];
        this.articles.push(new Article('Angular2', 'https://angular.io/', 10));
        this.articles.push(new Article('Angular2', 'https://angular.io/', 10));
    }

    onArticleCreated(article: Article)
    {
        this.articles.push(article);
    }
}
