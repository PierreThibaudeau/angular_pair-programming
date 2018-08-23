// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule
  MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// App
import { AppComponent } from './app.component';

// Articles
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/list/list.component';
import { ArticleDetailComponent } from './article/detail/detail.component';
import { ArticleUpdateComponent } from './article/admin/update.component';
import { ArticleCreateComponent } from './article/admin/create.component';
import { ArticleDeleteComponent } from './article/admin/delete.component';

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
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
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
