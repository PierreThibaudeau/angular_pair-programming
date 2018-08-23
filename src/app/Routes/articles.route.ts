import { ArticleListComponent } from '../article/list/list.component';
import { ArticleCreateComponent } from '../article/admin/create.component';
import { ArticleDetailComponent } from '../article/detail/detail.component';
import { ArticleUpdateComponent } from '../article/admin/update.component';
import { ArticleComponent } from '../article/article.component';
import { Routes } from '@angular/router';

export const articlesRoutes: Routes = [
    {path: 'articles', component: ArticleListComponent},
    {path: 'articles/create', component: ArticleCreateComponent},
    {path: 'articles/:id', component: ArticleDetailComponent},
    {path: 'articles/:id/update', component: ArticleUpdateComponent},
    {path: 'articles/:id/delete', component: ArticleComponent},
];

export default articlesRoutes;
