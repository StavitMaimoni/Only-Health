import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-four',
    templateUrl: './article-four.component.html',
    styleUrls: ['./article-four.component.css']
})
export class ArticleFourComponent implements OnInit {

    ngOnInit() {
        window.scrollTo(0, 0);
    }

}
