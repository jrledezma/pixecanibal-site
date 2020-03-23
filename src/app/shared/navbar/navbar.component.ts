import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public tranlateSrv: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(selectedLanguage: string) {
    this.tranlateSrv.setDefaultLang(selectedLanguage);
  }

}
