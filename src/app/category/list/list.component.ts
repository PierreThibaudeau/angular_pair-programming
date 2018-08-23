import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
    selector: 'app-list-category',
    templateUrl: './list.component.html',
    styleUrls: ['../../app.component.css']
})

export class CategoryListComponent implements OnInit {
    public categories;

    constructor(private categoriesService: CategoriesService) {
    }

    ngOnInit() {
        this.categoriesService.getAll().subscribe((categoriesFromServer) => {
            this.categories =  categoriesFromServer;
        });
    }

}
