import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  public checkSignin = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  signin(data: any){
    //this.http.post('');
    console.log(data);
    return this.http.post('http://localhost/backend/login.php',data);
  }

  signUp(data: any){
    //this.http.get('');
    return this.http.post('http://localhost/backend/user_register.php',data);
  }

  events(data:any){
    return this.http.post('http://localhost/backend/events.php',data);

  }

  eventType(data:any){
    return this.http.get('http://localhost/backend/eventType.php?get_events=1',data);


  }

  profile(data:any){
    return this.http.post('http://localhost/backend/profile.php', data)
  }

  updatePassword(data:any){
    return this.http.post('http://localhost/backend/update_password.php', data)
  }


  getProfile(token:any){
   

    return this.http.get('http://localhost/backend/get_profile.php?token='+ token)

  }
  

  }


