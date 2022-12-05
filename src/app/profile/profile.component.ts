import { Component, OnInit } from '@angular/core';
import {SignInService} from '../services/signin.service';


interface Profile {

  //name:any;
  about_me:any;
  interests:any;
  bio:any;

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  get_profile: Profile= {about_me: '', bio: '', interests:''};
  token=localStorage.getItem('token')
 

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
    

    this.signInService.getProfile(this.token).subscribe((data:any)=>{

      console.log(data);
      this.get_profile = data.profile;
    });
  }
  

}
  


