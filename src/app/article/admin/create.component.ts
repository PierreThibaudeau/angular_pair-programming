import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './articleForm.component.html',
    styleUrls: ['../../app.component.css']
})

export class CreateComponent {
    public article = {};
    public backRoute = [];

    constructor(
        private articlesService: ArticlesService,
        private router: Router,
    ) {}

    saveArticle() {
        this.articlesService.create(this.article).subscribe( (articleCreated) => {
            this.router.navigate(['/articles', articleCreated['id']]);
            this.backRoute = ['/articles'];
        });
    }
}
