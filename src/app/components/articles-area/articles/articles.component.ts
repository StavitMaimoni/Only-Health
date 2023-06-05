import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

    ngOnInit() {
        window.scrollTo(0, 0);// Scroll to the top of the page on component initialization
    }
}
