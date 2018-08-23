import articlesRoutes from './articles.route';
import categoriesRoutes from './categories.route';
import { Routes } from '@angular/router';

export const routes: Routes = [
    ...articlesRoutes,
    ...categoriesRoutes,
];
