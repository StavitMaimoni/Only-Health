import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { NotifyService } from '../../services/notify.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataTableRequestModel } from 'src/app/models/data-table-request-model';
import { DataTableResponseModel } from 'src/app/models/data-table-response-model';
// declare var google: any;


@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css'],
})

export class DataComponent implements OnInit {
    // Reference the dataForm and google_translate_element in the HTML template
    @ViewChild('dataForm', { static: true }) dataForm: NgForm;
    // @ViewChild('google_translate_element', { static: true }) googleTranslateElement: ElementRef;

    public dataTable = new DataTableRequestModel();
    public navbarVisible = false;
    public loading: boolean = false;
    public clean: boolean = false;
    public isSmallScreen: boolean = false;
    public apiResponse: DataTableResponseModel = new DataTableResponseModel();

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.checkScreenSize();
    }

    public constructor(
        private notifyService: NotifyService,
        private http: HttpClient,
    ) { }

    ngOnInit() {
        window.scrollTo(0, 0);// Scroll to the top of the page on component initialization
        this.checkScreenSize();
    }

    checkScreenSize() {
        this.isSmallScreen = window.innerWidth < 852; // Adjust the threshold as needed
    }

    // public googleTranslateElementInit() {
    //     // Initialize the Google Translate API widget
    //     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }

    public send(clickedButton: string) {
        try {
            if (clickedButton === 'send') {
                if (this.dataTable.sex === 'male') {
                    this.dataTable.pregnant = 0;
                }
                // Validate input fields and display an error message if any fields are empty or invalid
                if (!this.dataTable.age || this.dataTable.age < 0 || this.dataTable.age > 130 || !this.dataTable.sex || this.dataTable.smoke === undefined || this.dataTable.smoke > 1
                    || this.dataTable.sexuallyActive > 1 || this.dataTable.sexuallyActive === undefined || this.dataTable.pregnant > 1 || this.dataTable.pregnant === undefined) {
                    this.notifyService.error("אנא מלא את כל שדות הקלט");
                    return;
                }
                else {
                    // If input is valid, make an API call to retrieve health information
                    this.loading = true;
                    this.http.get('https://health.gov/myhealthfinder/api/v3/myhealthfinder.json', {
                        params: {
                            lang: "es",
                            age: this.dataTable.age.toString(),
                            sex: this.dataTable.sex,
                            tobaccoUse: this.dataTable.smoke.toString(),
                            sexuallyActive: this.dataTable.sexuallyActive.toString(),
                            pregnant: this.dataTable.pregnant.toString(),
                            category: "All"
                        }
                    }).subscribe((response: any) => {
                        // Parse API response and store data in apiResponse object
                        this.apiResponse.accessibleVersion = [];
                        this.apiResponse.imageUrl = [];
                        this.apiResponse.myHFDescription = [];
                        this.apiResponse.myHFTitle = [];
                        this.apiResponse.myHFHeading = response.Result.MyHFHeading;
                        const resources = response.Result.Resources.all.Resource;

                        // Extract resources from the response and add them to the apiResponse object
                        for (let i = 0; i < resources.length; i++) {
                            this.apiResponse.accessibleVersion.push(resources[i].AccessibleVersion);
                            this.apiResponse.imageUrl.push(resources[i].ImageUrl);
                            this.apiResponse.myHFTitle.push(resources[i].MyHFTitle);
                            this.apiResponse.myHFDescription.push(this.removeTags(resources[i].MyHFDescription));
                        }

                        this.loading = false;
                        // this.googleTranslateElementInit();
                    }, (error) => {
                        this.notifyService.error(error);
                    });
                }
            }
            else {
                this.clean = true;
                this.loading = false;
                this.dataForm.reset();
                this.dataTable = new DataTableRequestModel(); // Initialize the dataTable object
                this.apiResponse = new DataTableResponseModel(); // Clean the Google Translate widget selection
                const translateElement = document.getElementById('google_translate_element');
                // if (translateElement) {
                //     const parentElement = translateElement.parentNode;
                //     parentElement.removeChild(translateElement);
                //     const newTranslateElement = document.createElement('div');
                //     newTranslateElement.id = 'google_translate_element';
                //     parentElement.appendChild(newTranslateElement);
                //     this.googleTranslateElementInit();
                // }

            }
        }
        catch (error) {
            this.notifyService.error(error);
        }
    }

    // This function removes HTML tags from a string
    public removeTags(str: string): string {
        str = str.replace(/<[^>]*>/g, '');
        return str;
    }

    // This function toggles the visibility of the navbar
    public toggleNavbar() {
        try {
            this.navbarVisible = !this.navbarVisible;
        } catch (error) {
            this.notifyService.error(error);
        }
    }
}
