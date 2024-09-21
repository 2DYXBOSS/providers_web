import { Component } from '@angular/core';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: ['./add-providers.component.css']
})
export class AddProvidersComponent {
  selectedTab: string = 'proprietaire';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
