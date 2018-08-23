import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-category',
    templateUrl: './categoryForm.component.html',
    styleUrls: ['../../app.component.css']
})

export class CategoryCreateComponent implements OnInit  {
    public category = {};
    public backRoute = [];

    constructor(
        private categoriesService: CategoriesService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.backRoute = ['/categories'];
    }

    saveCategory() {
        this.categoriesService.create(this.category).subscribe( (categoryCreated) => {
            this.router.navigate(['/categories', categoryCreated['id']]);
        });
    }
}
