import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import Player from '@vimeo/player';
import { TranslateService } from '@ngx-translate/core';

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
  showPlayer = true;
  private projects = (projectData as any).default;

  @ViewChild('player_container', { static: false }) playerContainer;
  private player: Player;

  constructor(public tranlateSrv: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private cacheDataSrv: CacheDataService) {
    this.projectDataId = this.cacheDataSrv.getProjectId() || this.projects[0].prjId;
  }

  ngOnInit() {
    for (const prj of this.projects) {
      if (prj.prjId === this.projectDataId) {
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
      projectIndex++;
    }
    if (this.projects[projectIndex - 1]) {
      this.projectData = this.projects[projectIndex - 1];
    } else {
      this.projectData = this.projects[this.projects.length - 1];
    }
    this.projectDataId = this.projectData.prjId;

    if (!this.projectData.urlVideo) {
      this.showPlayer = false;
      this.player.destroy();
      return;
    }
    if (!this.projectData.urlVideo) {
      this.showPlayer = false;
      this.player.destroy();
      return;
    }
    this.player.getVideoUrl()
      .then(result => {
        this.showPlayer = true;
        this.player.id = this.projectData.urlVideo;
        this.player.loadVideo(this.projectData.urlVideo);
        this.changeDetector.detectChanges();
      })
      .catch(error => {
        this.player = new Player(this.playerContainer.nativeElement, {
          id: this.projectData.urlVideo,
          muted: false,
          quality: '1080p',
          controls: false,
          color: '#000E18'
        });
      });
  }

  nextProject() {
    let projectIndex = 0;
    for (let prj of this.projects) {
      if (prj.prjId === this.projectDataId) {
        break;
      }
      projectIndex++;
    }
    if (this.projects[projectIndex + 1]) {
      this.projectData = this.projects[projectIndex + 1];
    } else {
      this.projectData = this.projects[0];
    }
    this.projectDataId = this.projectData.prjId;

    if (!this.projectData.urlVideo) {
      this.showPlayer = false;
      this.player.destroy();
      return;
    }
    this.player.getVideoUrl()
      .then(result => {
        this.showPlayer = true;
        this.player.id = this.projectData.urlVideo;
        this.player.loadVideo(this.projectData.urlVideo);
        this.changeDetector.detectChanges();
      })
      .catch(error => {
        this.player = new Player(this.playerContainer.nativeElement, {
          id: this.projectData.urlVideo,
          muted: false,
          quality: '1080p',
          controls: false,
          color: '#000E18'
        });
      });
  }

}
