import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['../../app.component.css']
})

export class ListComponent implements OnInit {
    public articles;
    public page = 'list';

    constructor(private articlesService: ArticlesService) {
    }

    ngOnInit() {
        this.articlesService.getAll().subscribe((articlesFromServer) => {
            this.articles =  articlesFromServer;
        });
    }

}
