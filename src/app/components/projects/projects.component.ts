import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as projectsData from '../../../../src/projects.json'

import { ProjectsDetailComponent } from '../projects-detail/projects-detail.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CacheDataService } from '../../services/cache-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  projectDataList = (<any>projectsData).default;

  constructor(public tranlateSrv: TranslateService,
    private router: Router,
    private cacheDataSrv: CacheDataService) {
    console.log(this.projectDataList);
  }

  ngOnInit() {
  }

  open(project: any) {
    this.cacheDataSrv.setProjectId(project.prjId);
    this.router.navigate(['/detalleproyecto']);
    /*
    const modalOptions: NgbModalOptions = {
      backdrop: true,
      centered: true,
      size: "xl"
    }
    console.log(project);
    const modalRef = this.modalService.open(ProjectsDetailComponent, modalOptions);
    modalRef.componentInstance.projectData = project;
    */
  }

}
