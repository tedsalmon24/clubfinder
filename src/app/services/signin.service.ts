import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient) { }

  signin(data: any){
    //this.http.get('');
    console.log(data);
    return this.http.post('http://localhost:8080/backend/login.php',data);
  }

  signUp(data: any){
    //this.http.get('');
    return this.http.post('http://localhost:8080/backend/user_register.php',data);
  }


}