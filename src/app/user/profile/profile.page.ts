import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {

  constructor( public navCtrl: NavController,
    public menuCtrl: MenuController) { }
 




ionViewWillEnter() {

  this.menuCtrl.enable(true);
}
}