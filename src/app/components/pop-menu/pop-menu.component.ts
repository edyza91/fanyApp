import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-menu',
  templateUrl: './pop-menu.component.html',
  styleUrls: ['./pop-menu.component.scss'],
})
export class PopMenuComponent implements OnInit {

  openMenu: Boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
  goProfile(){
    this.navCtrl.navigateForward('profile')
  }


}
