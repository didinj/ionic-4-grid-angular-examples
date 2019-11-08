import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  articles: any[] = [
    { title: 'Grails 4 Tutorial: Spring Security Core Login Example', image: './assets/imgs/article1.png' },
    { title: 'Angular Material Form Controls, Form Field and Input Examples', image: './assets/imgs/article2.png' },
    { title: 'Angular 8 Tutorial: Observable and RXJS Examples', image: './assets/imgs/article3.png' },
    { title: 'React Native Tutorial: Facebook Login Example', image: './assets/imgs/article4.png' },
    { title: 'Spring Boot Tutorial: Build an MVC Java Web App using Netbeans', image: './assets/imgs/article5.png' },
    { title: 'Ionic 4 Tutorial: Facebook Login Example', image: './assets/imgs/article6.png' },
    { title: 'View Google Maps in HTML Page', image: './assets/imgs/article7.png' },
    { title: 'Angular 8 Tutorial: REST API and HttpClient Examples', image: './assets/imgs/article8.png' },
    { title: 'MEAN Stack (Angular 8) Tutorial: Build a Simple Blog CMS', image: './assets/imgs/article9.png' },
    { title: 'MongoDB Tutorial: Aggregate Method Example', image: './assets/imgs/article10.png' },
    { title: 'Ionic 4 Tutorial: Angular 8 Multilevel Accordion Menu Example', image: './assets/imgs/article11.png' },
    { title: 'React Native Firebase Cloud Messaging (FCM) Push Notification', image: './assets/imgs/article12.png' }
  ];

  constructor() {}

}
