import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ClientAccessLocationService } from './services/client-access-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pixel Canibal';

  private spaLangCountries: string[] = [
    'argentina',
    'bolivia',
    'chile',
    'colombia',
    'costa rica',
    'cuba',
    'ecuador',
    'el salvador',
    'españa',
    'guatemala',
    'guinea ecuatorial',
    'Honduras',
    'méxico',
    'nicaragua',
    'panamá',
    'uruguay',
    'perú',
    'puerto rico',
    'república dominicana',
    'uruguay',
    'venezuela',

  ]

  constructor(private tranlateSrv: TranslateService,
    private clientLocationSrv: ClientAccessLocationService) {
    this.tranlateSrv.setDefaultLang('eng');
    this.clientLocationSrv.getAccessInfo()
      .subscribe((observer: any) => {
        this.spaLangCountries.forEach((country: string) => {
          if (observer.country.toLowerCase() === country) {
            this.tranlateSrv.setDefaultLang('spa');
            return;
          }

        });
      });
  }
}
