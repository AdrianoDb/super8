import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

ciccio: string;
  constructor(public navCtrl: NavController) {
  	this.ciccio = "daje forte";
  }

}
