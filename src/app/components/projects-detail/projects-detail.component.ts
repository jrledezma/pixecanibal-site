import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import * as projectData from '../../../projects.json';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styles: []
})
export class ProjectsDetailComponent implements OnInit {

  projectData: any;
  projectDataId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.projectDataId = Number.parseInt(this.route.snapshot.paramMap.get('project'));
    for (let prj of (<any>projectData).default) {
      if (prj.prjId === this.projectDataId) {
        this.projectData = prj;
        return;
      }
    }
  }

}
