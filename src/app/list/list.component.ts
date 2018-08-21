import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
})

export class ListComponent implements OnInit {
    public articles;

    constructor(private articlesService: ArticlesService) {
    }

    ngOnInit(){
        this.articles = this.articlesService.getArticles();
    }
}
