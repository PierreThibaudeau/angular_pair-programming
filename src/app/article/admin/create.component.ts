import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-article',
    templateUrl: './articleForm.component.html',
    styleUrls: ['../../app.component.css']
})

export class ArticleCreateComponent implements OnInit  {
    public article = {};
    public categories = [];
    public backRoute = [];

    constructor(
        private articlesService: ArticlesService,
        private categoriesService: CategoriesService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.backRoute = ['/articles'];
        this.categoriesService.getAll().subscribe( (categoriesFromServer) => {
            this.categories = categoriesFromServer;
        });
    }

    saveArticle() {
        this.articlesService.create(this.article).subscribe( (articleCreated) => {
            this.router.navigate(['/articles', articleCreated['id']]);
        });
    }
}
