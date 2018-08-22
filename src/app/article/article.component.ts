import { Component, Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})

export class ArticleComponent {
  @Input() article;
  @Input() page;

  constructor(
      private articlesService: ArticlesService,
  ) {}

  deleteArticle(id) {
    this.articlesService.remove(id).subscribe();
  }
}
