// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Angular Material
import {
  MatButtonModule, MatCheckboxModule,
  MatInputModule, MatListModule,
  MatRadioModule, MatSelectModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// App
import { AppComponent } from './app.component';

// Articles
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/list/list.component';
import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleUpdateComponent } from './article/admin/update.component';
import { ArticleCreateComponent } from './article/admin/create.component';
import { ArticleDeleteComponent } from './article/admin/delete.component';
import { ArticleCommentComponent } from './article/comment/comment.component';

// Categories
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/list/list.component';
import { CategoryDetailComponent } from './category/detail/detail.component';
import { CategoryUpdateComponent } from './category/admin/update.component';
import { CategoryCreateComponent } from './category/admin/create.component';
import { CategoryDeleteComponent } from './category/admin/delete.component';

// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';

// Services
import { ArticlesService } from './services/articles.service';
import { CategoriesService } from './services/categories.service';

// Routes
import { routes } from './Routes/routes';

// Environment Variables
import { environment } from '../environments/environment';

const apiUrl: string = environment.apiUrl;

@NgModule({
  exports: [
    MatButtonModule, MatCheckboxModule,
    MatInputModule, MatListModule,
    MatRadioModule, MatSelectModule,
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    ArticleUpdateComponent,
    ArticleCreateComponent,
    ArticleDeleteComponent,
    ArticleCommentComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: 'apiUrl', useValue: apiUrl },
    ArticlesService,
    CategoriesService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
