import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-article',
    templateUrl: './articleForm.component.html',
})

export class ArticleCreateComponent implements OnInit  {
    public article = {};
    public backRoute = [];

    constructor(
        private articlesService: ArticlesService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.backRoute = ['/articles'];
    }

    saveArticle() {
        this.articlesService.create(this.article).subscribe( (articleCreated) => {
            this.router.navigate(['/articles', articleCreated['id']]);
        });
    }
}
