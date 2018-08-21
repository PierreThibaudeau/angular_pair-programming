import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {
    getArticles() {
        return [
            {
                title: 'Faune',
                content: 'OUI OUI OUI OUI',
                comment: [
                    'coucou',
                    'coucou2',
                ],
            },
            {
                title: 'Flore',
                content: 'NON',
                comment: [
                ],
            },
        ];
    }
}
