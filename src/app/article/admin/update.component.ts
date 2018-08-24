import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
    selector: 'app-update-article',
    templateUrl: './articleForm.component.html',
    styleUrls: ['../../app.component.css']
})

export class ArticleUpdateComponent implements OnInit {
    public article = {};
    public categories = [];
    public backRoute = [];

    constructor(
        private articlesService: ArticlesService,
        private categoriesService: CategoriesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const snapshot = this.route.snapshot;
        const id = snapshot.params.id;
        this.articlesService.getById(id).subscribe((articleFromServer) => {
            this.article = articleFromServer;
            this.backRoute = ['/articles', this.article['id']];
        });
        this.categoriesService.getAll().subscribe( (categoriesFromServer) => {
            this.categories = categoriesFromServer;
        });
    }

    saveArticle() {
        this.articlesService.update(this.article).subscribe( () => {
            this.router.navigate(['/articles', this.article['id']]);
        });
    }
}
