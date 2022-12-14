import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Club {
  Id:string;
  Name: string;
  ShortName:string;
  WebsiteKey:string;
  Description: string;
  Summary:string;
  picture:any;
  CategoryIds:string;
  CategoryNames: string;
  webLink:any
}
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  searchTerm = '';
  searchResults:any;
  
  clubs: Club[] = [];
  searchedClubs: Club[]=[];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    //gets the data from json file

    this.http.get<Club[]>('./assets/json/data.json')
      .subscribe((data: any) => {
        this.clubs = data.value;
        console.log(this.clubs);
      });

  }

  search():void{

    console.log(this.searchTerm);
    this.searchedClubs = [];
      //copy of clubs 
    this.clubs.filter(item=>{
      if(item.Name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      {
        //pushes to the searched clubs if search term name is in the club   
        this.searchedClubs.push(item);
      }
    });

    console.log(this.searchedClubs);
  }

  




}

