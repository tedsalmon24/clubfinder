import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from './services/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clubfinder';
  isLoggedin = localStorage.getItem('token')? true : false;

  constructor(private router: Router, private signInService: SignInService){
    this.signInService.checkSignin.subscribe(res=>{
      if(res == true)
        this.isLoggedin=true;
    });

  }

  signOut(){
    localStorage.removeItem('token');
    this.isLoggedin = false;
    this.router.navigate(['/signin']);
  }
}
