import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import Player from '@vimeo/player';

import * as projectData from '../../../projects.json';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styles: []
})
export class ProjectsDetailComponent implements OnInit, AfterViewInit {

  projectData: any;
  projectDataId: number;

  @ViewChild('player_container', { static: false }) playerContainer;
  private player: Player;

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

  ngAfterViewInit() {
    // child is set
    this.player = new Player(this.playerContainer.nativeElement, {
      id: environment.reelVideoUrl,
      muted: false,
      quality: '1080p',
      controls: false,
      color: '#000E18'
    });
  }

}
