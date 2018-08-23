import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
    selector: 'app-list-article',
    templateUrl: './list.component.html',
    styleUrls: ['../../app.component.css']
})

export class ArticleListComponent implements OnInit {
    public articles;

    constructor(private articlesService: ArticlesService) {
    }

    ngOnInit() {
        this.articlesService.getAll().subscribe((articlesFromServer) => {
            this.articles =  articlesFromServer;
        });
    }

}
