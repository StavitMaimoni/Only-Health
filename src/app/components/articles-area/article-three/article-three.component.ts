import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-three',
    templateUrl: './article-three.component.html',
    styleUrls: ['./article-three.component.css']
})
export class ArticleThreeComponent implements OnInit{

    ngOnInit() {
        window.scrollTo(0, 0);
    }

}
