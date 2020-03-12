import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import * as projectData from '../../../projects.json';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styles: []
})
export class ProjectsDetailComponent implements OnInit {

  projectData: any;
  projectDataId: number;

  constructor(private router: Router,
    private route: ActivatedRoute) {
    this.projectDataId = Number.parseInt(this.route.snapshot.paramMap.get('project'));
    for (let prj of (<any>projectData).default) {
      if (prj.prjId === this.projectDataId) {
        this.projectData = prj;
        break;
      }
    }
    if (this.projectData === undefined) {
      this.router.navigate(['proyectos'])
    }
  }

  ngOnInit() {

  }

}
