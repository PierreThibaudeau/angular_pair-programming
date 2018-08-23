import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-update-category',
    templateUrl: './categoryForm.component.html',
})

export class CategoryUpdateComponent implements OnInit {
    public category = {};
    public backRoute = [];

    constructor(
        private categoriesService: CategoriesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const snapshot = this.route.snapshot;
        const id = snapshot.params.id;
        this.categoriesService.getById(id).subscribe((categoryFromServer) => {
            this.category = categoryFromServer;
            this.backRoute = ['/categories', this.category['id']];
        });
    }

    saveCategory() {
        this.categoriesService.update(this.category).subscribe( () => {
            this.router.navigate(['/categories', this.category['id']]);
        });
    }
}
