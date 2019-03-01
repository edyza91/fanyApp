import { NavController, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor( public navCtrl: NavController,
    public menuCtrl: MenuController) { }
 




ionViewWillEnter() {

  this.menuCtrl.enable(true);
}

}
