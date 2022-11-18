import { Component, OnInit } from '@angular/core';
import {SignInService} from '../services/signin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventPost',
  templateUrl: './eventPost.component.html',
  styleUrls: ['./eventPost.component.css']
})
export class eventPostComponent implements OnInit {

  eventPostForm:any;
  eventget:any;

  getEvents:any;
 




  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit(): void {


    this.eventPostForm=new FormGroup({
    
    eventypeId:new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
    startDate:new FormControl(),
    endDate:new FormControl(),
    location:new FormControl(),
    locationAddress:new FormControl(),
    token:new FormControl(localStorage.getItem('token')),

    })




    
  }

  onSubmit(data: any){
    if(this.eventPostForm.valid){
     
      console.log(data);
      this.signInService.events(data).subscribe((res:any)=>{
        alert("Event created");
        this.eventPostForm.reset();
        console.log(res);
      });
    } 



    
   
    
  }



}
