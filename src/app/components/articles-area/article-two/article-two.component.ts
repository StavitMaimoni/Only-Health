import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-two',
    templateUrl: './article-two.component.html',
    styleUrls: ['./article-two.component.css']
})
export class ArticleTwoComponent implements OnInit{

    ngOnInit() {
        window.scrollTo(0, 0);
    }

}
