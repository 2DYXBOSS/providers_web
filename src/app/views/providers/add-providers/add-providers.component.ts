import { Component } from '@angular/core';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: ['./add-providers.component.css']
})
export class AddProvidersComponent {
  selectedTab: string = 'home';

  // Function to change the selected tab
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
