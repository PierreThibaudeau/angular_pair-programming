import {Component, OnInit} from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-update-article',
    templateUrl: './articleForm.component.html',
})

export class ArticleUpdateComponent implements OnInit {
    public article = {};
    public backRoute = [];

    constructor(
        private articlesService: ArticlesService,
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
    }

    saveArticle() {
        this.articlesService.update(this.article).subscribe( () => {
            this.router.navigate(['/articles', this.article['id']]);
        });
    }
}
