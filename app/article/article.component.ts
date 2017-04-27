import { Component, Input} from '@angular/core'
import { Article } from '../shared/models/article';

@Component({
    selector: 'article',
    templateUrl: './app/article/article.component.html',
    styleUrls: ['./app/article/article.component.css',],
    host: {
    class: 'row'
  }
})
export class ArticleComponent{
    @Input() article: Article;

    voteUp()
    {
        this.article.voteUp();
        return false;
    }

    voteDown()
    {
        this.article.voteDown();
        return false;
    }
}
