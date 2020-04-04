import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import Player from '@vimeo/player';

import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styles: []
})
export class ReelComponent implements OnInit, AfterViewInit {

  @ViewChild('player_container', { static: false }) playerContainer;
  private player: Player;

  constructor() { }

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
    console.log(Player);
  }

}
