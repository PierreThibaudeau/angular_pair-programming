import { Component, Input} from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-delete-article',
    templateUrl: './delete.component.html',
    styleUrls: ['../../app.component.css']
})

export class ArticleDeleteComponent {
    @Input() id_article;

    constructor(
        private articlesService: ArticlesService,
        private router: Router,
    ) {}

    deleteArticle(id) {
        if (confirm('Voulez-vous vraiment supprimer cet article ?')) {
                this.articlesService.remove(id).subscribe((deletedArticle) => {
                this.router.navigate(['/articles']);
            });
        }
    }
}
