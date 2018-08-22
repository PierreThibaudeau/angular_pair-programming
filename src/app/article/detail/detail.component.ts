import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
})

export class DetailComponent implements OnInit {
    public article = {};
    public page = 'detail';

    constructor(
        private articlesService: ArticlesService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        const snapshot = this.route.snapshot;
        const id = snapshot.params.id;
        this.articlesService.getById(id).subscribe((articleFromServer) => {
            this.article =  articleFromServer;
        });
    }
}
