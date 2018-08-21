import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './list/article/article.component';
import { ListComponent } from './list/list.component';

import { ArticlesService } from './services/articles.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
