import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArayCityMallStore';
  public config: ToasterConfig =
    new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: false,
      timeout: 0
    });
}
