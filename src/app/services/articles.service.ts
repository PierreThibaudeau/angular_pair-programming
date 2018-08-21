import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {
    getArticles() {
        console.log('getArticles called!');
        return [
            {
                title: 'Faune',
                content: 'OUI',
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
