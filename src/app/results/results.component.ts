import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  catSelected: any;
  orgResults: any
  organizations: any = [];
  totalOrgs = 0;

	constructor(private _router: Router,
              private httpClient: HttpClient
             ) { }

	ngOnInit() {
		this.catSelected = JSON.parse(localStorage['catSelected']);

    this.httpClient.get<any>("assets/json/data.json").subscribe((data)=> {
      this.organizations = data.value;
      this.orgResults = [];
      for(let i=0; i < this.organizations.length; i++) {
        if(this.catSelected.includes(this.organizations[i].CategoryNames[0]) && this.organizations[i].CategoryNames[0]!==undefined) {
          this.orgResults.push({ name: this.organizations[i].Name, description: this.organizations[i].Description })
          this.totalOrgs++;
        }
      }
      this.orgResults.sort();
    });

	}

  redirect(){
    this._router.navigate(['/quiz'])
  }
 
}

