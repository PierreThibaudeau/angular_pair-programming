import { Injectable, Injector } from '@angular/core';
import { Service } from './service.service';

@Injectable()
export class ArticlesService extends Service {

    constructor(private injector: Injector) {
        super('articles', injector);
    }

    getAllByCategory(id_category) {
        return new Promise((resolve) => this.getAll().subscribe((articlesFromServer) => {
            const articles: Array<any> = [];
            articlesFromServer.forEach((article) => {
                if (article['categories'].indexOf(id_category) !== -1) {
                    articles.push(article);
                }
            });
            resolve(articles);
        }));
    }

    addComment(id, comment) {
        return this.http.post(this.apiUrl + '/articles/' + id + '/comments', comment);
    }
}
