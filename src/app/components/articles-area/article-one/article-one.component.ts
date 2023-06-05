import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-article-one',
    templateUrl: './article-one.component.html',
    styleUrls: ['./article-one.component.css']
})
export class ArticleOneComponent implements OnInit {
    public isSmallScreen: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.checkScreenSize();
    }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.checkScreenSize();
    }
    checkScreenSize() {
        this.isSmallScreen = window.innerWidth < 768; // Adjust the threshold as needed
      }

}
