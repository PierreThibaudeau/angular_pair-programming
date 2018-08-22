import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ArticlesService {
    private apiUrl = 'http://localhost:8080/rest';

    constructor(
        private http: HttpClient,
    ) {}

    getAll() {
        return this.http.get(`${this.apiUrl}/articles`);
    }

    getById(id) {
        return this.http.get(`${this.apiUrl}/articles/${id}`);
    }

    update(article) {
        return this.http.put(`${this.apiUrl}/articles/${article.id}`, article);
    }

    create(article) {
        return this.http.post(`${this.apiUrl}/articles/`, article);
    }

    remove(id) {
        return this.http.delete(`${this.apiUrl}/articles/${id}`);
    }
}
