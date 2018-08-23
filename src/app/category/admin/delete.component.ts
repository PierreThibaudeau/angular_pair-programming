import { Component, Input} from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-delete-category',
    templateUrl: './delete.component.html',
    styleUrls: ['../../app.component.css']
})

export class CategoryDeleteComponent {
    @Input() id_category;

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

