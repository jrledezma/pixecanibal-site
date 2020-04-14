import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import Player from '@vimeo/player';

import * as projectData from '../../../projects.json';
import { environment } from 'src/environments/environment';
import { CacheDataService } from 'src/app/services/cache-data.service';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styles: []
})
export class ProjectsDetailComponent implements OnInit, AfterViewInit {

  projectData: any = {};
  projectDataId = '';
  private projects = (projectData as any).default;

  @ViewChild('player_container', { static: false }) playerContainer;
  private player: Player;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cacheDataSrv: CacheDataService) {
    this.projectDataId = this.cacheDataSrv.getProjectId() || this.projects[0].prjId;
  }

  ngOnInit() {
    for (const prj of this.projects) {
      if (prj.prjId === this.projectDataId) {
        console.clear();
        console.log(this.projectData);
        this.projectData = prj;
        break;
      }
    }
    if (this.projectData === undefined) {
      this.projectData = this.projects[0];
    }
  }

  ngAfterViewInit() {
    // child is set
    this.player = new Player(this.playerContainer.nativeElement, {
      id: this.projectData.urlVideo,
      muted: false,
      quality: '1080p',
      controls: false,
      color: '#000E18'
    });
    for (const prj of this.projects) {
      if (prj.prjId === this.projectDataId) {
        this.projectData = prj;
        console.clear();
        console.log(this.projectData);
        break;
      }
    }
    if (this.projectData === undefined) {
      this.projectData = this.projects[0];
    }
  }

  previousProject() {
    let projectIndex = 0;
    for (let prj of this.projects) {
      if (prj.prjId === this.projectDataId) {
        break;
      }
      console.log(projectIndex);
      projectIndex++;
    }
    if (this.projects[projectIndex - 1]) {
      this.projectData = this.projects[projectIndex - 1];
    } else {
      this.projectData = this.projects[this.projects.length - 1];
    }
    this.projectDataId = this.projectData.prjId;
  }

  nextProject() {
    let projectIndex = 0;
    for (let prj of this.projects) {
      if (prj.prjId === this.projectDataId) {
        break;
      }
      projectIndex++;
    }
    console.log(projectIndex);
    if (this.projects[projectIndex + 1]) {
      this.projectData = this.projects[projectIndex + 1];
    } else {
      this.projectData = this.projects[0];
    }
    this.projectDataId = this.projectData.prjId;
  }

}
