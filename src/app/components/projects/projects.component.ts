import { Component, OnInit } from '@angular/core';
import * as projectsData from '../../../../src/projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  projectDataList = (<any>projectsData).default;

  constructor() {
    console.log(this.projectDataList);
  }

  ngOnInit() {
  }

}
