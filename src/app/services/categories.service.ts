import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriesService {
    private apiUrl = 'http://localhost:8080/rest';

    constructor(
        private http: HttpClient,
    ) {}

    getAll() {
        return this.http.get(`${this.apiUrl}/categories`);
    }

    getById(id) {
        return this.http.get(`${this.apiUrl}/categories/${id}`);
    }

    update(category) {
        return this.http.put(`${this.apiUrl}/categories/${category.id}`, category);
    }

    create(category) {
        return this.http.post(`${this.apiUrl}/categories/`, category);
    }

    remove(id) {
        return this.http.delete(`${this.apiUrl}/categories/${id}`);
    }
}
