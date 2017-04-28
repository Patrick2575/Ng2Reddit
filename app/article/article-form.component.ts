import { Component, Output, EventEmitter} from '@angular/core';
import { Article } from '../shared/models/Article';

@Component({
    selector: 'article-form',
    templateUrl: './app/article/article-form.component.html',
    styleUrls: ['./app/article/article-form.component.css',]
})
export class ArticleFormComponent{
    @Output()
    articleCreated: EventEmitter<Article>;
    newArticle: Article;
    readyForInput: boolean;
    constructor()
    {
        this.articleCreated = new EventEmitter;
        this.newArticle = new Article('', '');
        this.readyForInput = true;
    }

    onSubmit()
    {
        this.articleCreated.emit(this.newArticle);
        this.readyForInput = false;
        this.newArticle = new Article('','');
        setTimeout(()=>{this.readyForInput = true;}, 0);
    }
}