import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})

export class ArticleComponent {
  @Input() article;
  @Input() index;
}