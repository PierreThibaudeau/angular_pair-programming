import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-category',
    templateUrl: './detail.component.html',
    styleUrls: ['../../app.component.css']
})

export class CategoryDetailComponent implements OnInit {
    public category = {};

    constructor(
        private categoriesService: CategoriesService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        const snapshot = this.route.snapshot;
        const id = snapshot.params.id;
        this.categoriesService.getById(id).subscribe((categoryFromServer) => {
            this.category =  categoryFromServer;
        });
    }
}
