import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Rocket } from '../../_models/rocket.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  rocket: Rocket;

  constructor() { 
	this.rocket = new Rocket();
  }

  ngOnInit() {
  }

}
