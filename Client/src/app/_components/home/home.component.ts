import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Rocket } from '../../_models/rocket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rocket: Rocket;
  reloading: boolean;

  constructor(private router: Router, private cd: ChangeDetectorRef) { 
	this.rocket = new Rocket();
  	this.reloading = false;
  }

  ngOnInit() {
  }

  onSearch(){
  	this.reloading = true;
  	this.cd.detectChanges();
  	this.reloading = false;
  	this.cd.detectChanges();
    this.cd.markForCheck();
  }

}
