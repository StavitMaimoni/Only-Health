import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-fifth',
    templateUrl: './article-fifth.component.html',
    styleUrls: ['./article-fifth.component.css']
})
export class ArticleFifthComponent implements OnInit{

    ngOnInit() {
        window.scrollTo(0, 0);
    }

}
