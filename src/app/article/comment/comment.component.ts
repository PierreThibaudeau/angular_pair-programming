import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-article-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['../../app.component.css']
})

export class ArticleCommentComponent implements OnInit {
    public article = {
        comments: []
    };
    public currentRoute = [];
    public comment = {};
    @Output() newComment = new EventEmitter();

    constructor(
        private articlesService: ArticlesService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        const snapshot = this.route.snapshot;
        const id = snapshot.params.id;
        this.articlesService.getById(id).subscribe((articleFromServer) => {
            this.article = articleFromServer;
            this.currentRoute = ['/articles', this.article['id']];
        });
    }

    saveComment() {
        this.articlesService.addComment(this.article['id'], this.comment).subscribe((commentCreated) => {
            this.article.comments = commentCreated.comments;
            this.newComment.emit(commentCreated.comments);
        });
    }
}
