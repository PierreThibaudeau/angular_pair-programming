import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
    selector: 'app-list-category',
    templateUrl: './list.component.html',
})

export class CategoryListComponent implements OnInit {
    public categories;
    public page = 'list';

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.categoriesService.getAll().subscribe((categoriesFromServer) => {
            this.categories =  categoriesFromServer;
        });
    }

}
