import { Component, OnInit } from '@angular/core';
import * as projectsData from '../../../../src/projects.json'
import { ProjectsDetailComponent } from '../projects-detail/projects-detail.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  projectDataList = (<any>projectsData).default;

  constructor(private modalService: NgbModal) {
    console.log(this.projectDataList);
  }

  ngOnInit() {
  }

  open(project: any) {
    const modalOptions: NgbModalOptions = {
      backdrop: true,
      centered: true,
      size: "xl"
    }
    console.log(project);
    const modalRef = this.modalService.open(ProjectsDetailComponent, modalOptions);
    modalRef.componentInstance.projectData = project;
  }

}
