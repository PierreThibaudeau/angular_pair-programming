import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['../app.component.css']
})

export class ArticleComponent {
  @Input() article;
}
