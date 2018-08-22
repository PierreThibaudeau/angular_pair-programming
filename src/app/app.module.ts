import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ListComponent } from './article/list/list.component';
import { DetailComponent } from './article/detail/detail.component';
import { UpdateComponent } from './article/admin/update/update.component';
import { CreateComponent } from './article/admin/create/create.component';

import { TruncatePipe } from './pipes/truncate.pipe';

import { ArticlesService } from './services/articles.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: 'articles', component: ListComponent},
  {path: 'articles/create', component: CreateComponent},
  {path: 'articles/:id', component: DetailComponent},
  {path: 'articles/:id/update', component: UpdateComponent},
  {path: 'articles/:id/delete', component: ArticleComponent, },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DetailComponent,
    ListComponent,
    UpdateComponent,
    CreateComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
