import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
})

export class UpdateComponent implements OnInit {
    public article = {};

    constructor(
        private articlesService: ArticlesService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        const snapshot = this.route.snapshot;
        const id = snapshot.params.id;
        this.articlesService.getById(id).subscribe(articleFromServer => this.article = articleFromServer);
    }

    saveArticle() {
        this.articlesService.update(this.article).subscribe();
    }
}
