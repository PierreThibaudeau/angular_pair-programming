import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
})

export class CreateComponent {
    public article = {};

    constructor(
        private articlesService: ArticlesService,
    ) {}

    saveArticle() {
        this.articlesService.create(this.article).subscribe();
    }
}
