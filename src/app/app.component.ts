import { Component, OnInit } from '@angular/core';
// import { ArticlesService } from './services/articles.service';
// import {FormControl} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /*implements OnInit */{
  // public articles = [];
  // public myControl = new FormControl();
  // filteredOptions: Observable<string[]>;
  //
  // constructor(private articlesService: ArticlesService) {}
  //
  // ngOnInit() {
  //   this.articlesService.getAll().subscribe((articlesFromServer) => {
  //     this.articles = articlesFromServer;
  //   });
  //
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //       map(value => this._filter(value))
  //   );
  // }


  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.articles.filter(article => article.toLowerCase().indexOf(filterValue) === 0);
  // }
}
