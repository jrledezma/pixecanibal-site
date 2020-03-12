import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styles: []
})
export class ProjectsDetailComponent implements OnInit {

  @Input() public projectData: any = {};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.projectData);
  }

}
