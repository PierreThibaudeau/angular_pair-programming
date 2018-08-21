import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
})

export class ListComponent {
    public articles;
    constructor(private articlesService: ArticlesService) {
        this.articles = articlesService.getArticles();
    }

}
