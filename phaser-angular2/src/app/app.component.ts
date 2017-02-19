/// <reference path='../../node_modules/phaser/typescript/phaser.d.ts'/>

import {Component} from '@angular/core';

import * as Phaser from 'phaser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  game: Phaser.Game;

    constructor(){
      this.game = new Phaser.Game(1280, 850, Phaser.AUTO, 'ingame', {
          preload: this.preload,
          create: this.create,
          update: this.update
      }); 
    }

  preload() {
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
  }

  create() {

  }

  update() {

  }

}