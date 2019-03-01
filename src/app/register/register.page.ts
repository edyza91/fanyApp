import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  async register(){
    const {email, password, cpassword } = this
    if(password !== cpassword ) {
      return console.log("Error password didn't match")
    }
    try{
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    console.log(res);
  } catch(err) {
    console.dir(err);
  }
  }

}
