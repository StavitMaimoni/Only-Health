import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    closeNavbar() {
        if ($(window).width() < 775) {
          $('#nav-check').prop('checked', false);
        }
      }
}
