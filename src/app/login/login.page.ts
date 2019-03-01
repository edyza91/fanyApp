import { ProfilePage } from './../user/profile/profile.page';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController) { }

  ngOnInit() {
  }

 async login(){
    const  { email, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password)
      
    } catch (err) {
      console.dir(err);
      
    }
    this.navCtrl.navigateRoot('home');
  }
}
