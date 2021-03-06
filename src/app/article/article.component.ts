import { Component, Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})

export class ArticleComponent {
  @Input() article;
  @Input() page;

  constructor(
      private articlesService: ArticlesService,
      private router: Router,
  ) {}

  deleteArticle(id) {
    this.articlesService.remove(id).subscribe((deletedArticle) => {
      this.router.navigate(['/articles']);
    });
  }
}
