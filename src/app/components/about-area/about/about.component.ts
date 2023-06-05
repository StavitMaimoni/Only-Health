import { Component, OnInit,HostListener } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
    public isSmallScreen: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.checkScreenSize();
    }

    ngOnInit() {
        window.scrollTo(0, 0);// Scroll to the top of the page on component initialization
        this.checkScreenSize();
    }
    
    checkScreenSize() {
        this.isSmallScreen = window.innerWidth < 852; // Adjust the threshold as needed
      }

}
