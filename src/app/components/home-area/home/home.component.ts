import { Component, ViewChild, ElementRef, OnInit,HostListener } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';
import { NgForm } from '@angular/forms';
import { NotifyService } from '../../services/notify.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @ViewChild('contactForm', { static: true }) contactForm: NgForm; // A reference to the contact form
    @ViewChild('home') homeRef: ElementRef;// A reference to the home component
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.checkScreenSize();
    }
    public isSmallScreen: boolean = false;
    public contact = new ContactModel(); // An instance of the ContactModel class to store contact information
    public images: { src: string, alt: string }[] = []; // An array of objects to store image source and alt tags
    public currentSlide = 0;// A variable to store the index of the current slide
    public slidePosition = 0; // A variable to store the position of the current slide
    public slideWidth = 0;// A variable to store the width of the current slide
    public constructor(
        private notifyService: NotifyService,// A service to display notifications
        private el: ElementRef// A service to manipulate the DOM
    ) { }

    ngOnInit() {
        window.scrollTo(0, 0);// Scroll to the top of the page on component initialization
                this.checkScreenSize();

    }

    // Function to scroll to the contact form
    public scrollToContactForm() {
        try {
            const contactForm = this.el.nativeElement.querySelector('form');// Get a reference to the contact form
            contactForm.scrollIntoView({ behavior: 'smooth' });// Scroll to the contact form using smooth scrolling
        } catch (error) {
            this.notifyService.error(error);
        }
    }

    // Function to send the contact form
    public send(e: Event) {
        try {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!this.contact.name || !this.contact.email || !this.contact.message) {
            this.notifyService.error("אנא מלא את כל שדות הקלט בכדי לשלוח הודעה");
            return;
          }
          if (!emailRegex.test(this.contact.email)) {
            this.notifyService.error("כתובת אימייל אינה חוקית");
            return;
          } else {
            emailjs
              .sendForm('service_83tzlol', 'template_z59unl4', e.target as HTMLFormElement, 'DW7k4BiBzPN57_p0Q')
              .then(
                (result: EmailJSResponseStatus) => {
                  this.notifyService.success("!תודה רבה על ההודעה");
                  this.contactForm.reset();
                },
                (error) => {
                  this.notifyService.error('Error :(\nPlease try again later!');
                }
              );
          }
        } catch (error) {
          this.notifyService.error(error);
        }
      }
      
      checkScreenSize() {
        this.isSmallScreen = window.innerWidth < 1200; // Adjust the threshold as needed
      }
}


