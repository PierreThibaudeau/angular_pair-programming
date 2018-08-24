import { Component, Input} from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
    selector: 'app-delete-category',
    templateUrl: './delete.component.html',
    styleUrls: ['../../app.component.css']
})

export class CategoryDeleteComponent {
    @Input() id_category;

    constructor(
        private categoriesService: CategoriesService,
        private articlesService: ArticlesService,
        private router: Router,
    ) {}

    deleteCategory(id) {
        if (confirm('La suppression de cette catégorie sera répercutée sur tous ses articles, souhaitez-vous continuer ?')) {
            this.articlesService.getAllByCategory(id).then((articlesWithCurrentCategory: Array<any>) => {
                let promises = [];
                if (articlesWithCurrentCategory.length > 0) {
                    promises = articlesWithCurrentCategory
                        .map(a => ({...a, categories: a.categories.filter(e => e !== id)}))
                        .map(a => new Promise(resolve => this.articlesService.update(a).subscribe(() => {
                            resolve();
                        })));
                }
                Promise.all(promises).then(() => {
                    this.categoriesService.remove(id).subscribe((deletedCategory) => {
                        this.router.navigate(['/categories']);
                    });
                });
            });
        }
    }
}

