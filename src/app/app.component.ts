import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'provider_web';
// }




export class AppComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router) {
    // Initialiser la route courante
    this.currentRoute = this.router.url;
  }

  ngOnInit() {
    // Écouter les changements de route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
