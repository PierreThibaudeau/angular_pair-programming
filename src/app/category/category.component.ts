import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../app.component.css']
})

export class CategoryComponent {
  @Input() category;
}
