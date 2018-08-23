import { CategoryListComponent } from '../category/list/list.component';
import { CategoryCreateComponent } from '../category/admin/create.component';
import { CategoryDetailComponent } from '../category/detail/detail.component';
import { CategoryUpdateComponent } from '../category/admin/update.component';
import { CategoryComponent } from '../category/category.component';
import { Routes } from '@angular/router';

export const categoriesRoutes: Routes = [
    {path: 'categories', component: CategoryListComponent},
    {path: 'categories/create', component: CategoryCreateComponent},
    {path: 'categories/:id', component: CategoryDetailComponent},
    {path: 'categories/:id/update', component: CategoryUpdateComponent},
    {path: 'categories/:id/delete', component: CategoryComponent},
];

export default categoriesRoutes;
