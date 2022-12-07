import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Club {
  Id:string;
  Name: string;
  ShortName:string;
  WebsiteKey:string;
  Description: string;
  Summary:string;
  ProfilePicture:any;
  CategoryIds:string;
  CategoryNames: string;
  webLink:any
}

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  clubs: Club[] = [];
  featuredClubs: Club[]=[];
  date = new Date('11-30-2022');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.date);
    let newDate = new Date();
    // calculates the number of milliseconds 
    let numberOfMiliseconds = newDate.getTime() - this.date.getTime();
    // gets the number of days 
    let numberOfDays = Math.round(numberOfMiliseconds / (1000 * 3600 * 24));
    console.log(numberOfDays);


    // gets the json data 
    this.http.get<Club[]>('./assets/json/data.json')
    .subscribe((data: any) => {
      this.clubs = data.value;
      console.log(this.clubs);
      if(numberOfDays%6==0){
      // the data changes after 6 days, It goes from array 0-9 to 10-9 and so on
      this.featuredClubs = this.clubs.slice((Math.ceil((numberOfDays)/6)-1)*10,Math.ceil((numberOfDays)/6)*10);
      }
      console.log(this.featuredClubs);
    });
  }

   

   

}
