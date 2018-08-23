import { Injectable, Injector } from '@angular/core';
import { Service } from './service.service';

@Injectable()
export class CategoriesService extends Service {

    constructor(private injector: Injector) {
        super('categories', injector);
    }
}
