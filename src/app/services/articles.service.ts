import { Injectable, Injector } from '@angular/core';
import { Service } from './service.service';

@Injectable()
export class ArticlesService extends Service {

    constructor(private injector: Injector) {
        super('articles', injector);
    }
    addComment(id, comment) {
        return this.http.post(this.apiUrl + '/articles/' + id + '/comments', comment);
    }
}
