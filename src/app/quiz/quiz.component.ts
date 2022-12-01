import { NumberSymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone, OnDestroy, ViewChild, Compiler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  createQuizForm: FormGroup;
  organizations: any = [];
  categories: any;
  catSelected: any;
  formCategories: any = {};

	constructor(
                private formBuilder: FormBuilder,
                private _router: Router,
                private httpClient: HttpClient
              ) {	
                  this.categories = { };
                  this.createQuizForm = this.formBuilder.group(this.categories)
  	          }

	ngOnInit() {

    this.httpClient.get<any>("assets/json/data.json").subscribe((data)=> {
      this.organizations = data.value;
      this.categories = [];
      for(let i=0; i < this.organizations.length; i++) {
        if(!this.categories.includes(this.organizations[i].CategoryNames[0]) && this.organizations[i].CategoryNames[0]!==undefined) {
          this.categories.push(this.organizations[i].CategoryNames[0])
        }
      }
      this.categories.sort();
      for(let i=0; i < this.categories.length; i++) {
          this.formCategories[this.categories[i]] = [this.categories[i]];
      }
      this.createQuizForm = this.formBuilder.group(this.formCategories)
    })
		
	}


  callQuiz(){
    this.catSelected = [];
    for(let i=0; i < this.categories.length; i++) {
      if(this.createQuizForm.controls[this.categories[i]].value === 'Interested' || this.createQuizForm.controls[this.categories[i]].value === 'Highly Interested') {
        this.catSelected.push(this.categories[i])
      }
    }
    localStorage.setItem('catSelected', JSON.stringify(this.catSelected));
    this._router.navigate(['/results'])
  }

	
}

