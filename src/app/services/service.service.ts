import {Injectable, Injector} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
    private routeName;
    protected http;
    protected apiUrl;

    constructor(routeName, private injectorObj: Injector) {
        this.http = this.injectorObj.get(HttpClient);
        this.apiUrl = this.injectorObj.get('apiUrl');
        this.routeName = routeName;
    }

    getAll() {
        return this.http.get(`${this.apiUrl}/${this.routeName}`);
    }

    getById(id) {
        return this.http.get(`${this.apiUrl}/${this.routeName}/${id}`);
    }

    update(object: Object) {
        return this.http.put(`${this.apiUrl}/${this.routeName}/${object['id']}`, object);
    }

    create(object: Object) {
        return this.http.post(`${this.apiUrl}/${this.routeName}/`, object);
    }

    remove(id) {
        return this.http.delete(`${this.apiUrl}/${this.routeName}/${id}`);
    }
}
