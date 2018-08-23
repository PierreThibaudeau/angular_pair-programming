import { Component, Input } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})

export class CategoryComponent {
  @Input() category;
  @Input() page;

  constructor(
      private categoriesService: CategoriesService,
      private router: Router,
  ) {}

  deleteCategory(id) {
    this.categoriesService.remove(id).subscribe((deletedCategory) => {
      this.router.navigate(['/categories']);
    });
  }
}
