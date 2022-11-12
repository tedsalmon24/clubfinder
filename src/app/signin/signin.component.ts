import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SignInService} from '../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isSignupHide = true;
  conPasswordType = "password";
  eyeIcon = 'uil-eye-slash';
  isPasswordHide = true;
  sigin="sigin-link";
  signup="signup-link";
  userName = '';
  password = '';
  name='';
  loginForm: any;
  signupForm:any;


  constructor(private signInService: SignInService) {
   }

  ngOnInit(): void {
  this.loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  this.signupForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    confirmpassword: new FormControl()
  })

  }

  onSubmit(data: any){
    if(this.loginForm.valid){
      
      console.log(data);
      this.signInService.signin(data).subscribe(res=>{
        console.log(res);
      });
    }
   
    
  }

  submit(data:any){
    if(this.signupForm.valid){
      
      console.log(data);
      this.signInService.signUp(data).subscribe(res=>{
        console.log(res);
      });
    }
  }

  showPassword(isVisible:any){
    if(isVisible){
    this.conPasswordType = 'text';
    this.eyeIcon = 'uil-eye';
    this.isPasswordHide = false;
    } else{
      this.conPasswordType = 'password';
      this.eyeIcon = 'uil-eye-slash';
      this.isPasswordHide = true;
    }
  }

  }

  



  




