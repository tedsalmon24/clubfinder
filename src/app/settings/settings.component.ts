import { Component, OnInit } from '@angular/core';
import {SignInService} from '../services/signin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  profileForm:any;
  passwordForm:any;

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {

    this.profileForm=new FormGroup({
    bio:new FormControl(),
    about:new FormControl(),
    interest:new FormControl(),
    token:new FormControl(localStorage.getItem('token')),

  });


  this.passwordForm = new FormGroup({
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    confirmNew: new FormControl(),
    token:new FormControl(localStorage.getItem('token')),
  });
    
  }


 // profile form
  onSubmit(data: any){
    if(this.profileForm.valid){
     
      console.log(data);
      this.signInService.profile(data).subscribe((res:any)=>{
        alert(res.message);
        this.profileForm.reset();
        console.log(res);
      });
    }  
    
  }

  //new password information

  submit(data: any){
    if(this.passwordForm.valid){
     
      console.log(data);
      this.signInService.updatePassword(data).subscribe((res:any)=>{
        alert(res.message);
        this.passwordForm.reset();
        console.log(res);
      });
    }  
    
  }

 




}
