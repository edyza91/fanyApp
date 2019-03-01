import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Profile',
        url: '/profile',
        direct: 'forward',
        icon: 'information-circle-outline'
      },

      {
        title: 'Contact',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
  editProfile(){
    this.navCtrl.navigateForward('profile');
  }

}
