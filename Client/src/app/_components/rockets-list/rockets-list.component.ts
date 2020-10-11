import { Component, Input, Output, OnInit,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RocketService } from '../../_services/rocket.service';
import  { AuthenticationService } from '../../_services/authentication.service';
import { Rocket } from '../../_models/rocket.model';

@Component({
  selector: 'app-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss'],
  providers: [ RocketService ]
})
export class RocketsListComponent implements OnInit {

  @Input() type: string;
  @Input() searchModel: Rocket;
  @Input() id: number;
  @Output() onLoad: EventEmitter<number> = new EventEmitter<number>();
  public rockets: Array<any>;
  public currentPage: number;
  public maxPages: number;

  constructor(
    private rocketService: RocketService, 
    private authService: AuthenticationService
  ) {
    this.type = "search";
    this.rockets = [];
    this.currentPage = 1;
    this.maxPages = 1;
  }

  ngOnInit() {
    this.getRockets();  
  }

  onLoadMore() {
    this.currentPage++;
    this.getRockets(this.currentPage);
  }

  getRockets(page=1){
    switch(this.type) {
      case "search": {
        this.rocketService.searchRockets(this.searchModel, page)
          .subscribe(response => {
            let rockets = JSON.parse(response._body);
            let len = rockets.length;
            for(let i=0; i<len; i++) {
              let rocket = new Rocket();
              rocket.id = rockets[i].id;
              rocket.name = rockets[i].name;
              rocket.boosters = rockets[i].boosters;
              rocket.costPerLaunch = rockets[i].cost_per_launch;
              rocket.active = rockets[i].active;
              if(rockets[i].favorite == 1) {
                rocket.favorite = true;
              } else rocket.favorite = false;
              this.rockets.push(rocket);
            }
            this.onLoad.emit(this.rockets.length);
          }, error => {
            console.error(error);
          });
        break;
      }
      case "favorite": {
        this.rocketService.favoriteRockets(page)
          .subscribe(response => {
            let rockets = JSON.parse(response._body);
            let len = rockets.length;
            for(let i=0; i<len; i++) {
              let rocket = new Rocket();
              rocket.id = rockets[i].id;
              rocket.name = rockets[i].name;
              rocket.boosters = rockets[i].boosters;
              rocket.costPerLaunch = rockets[i].cost_per_launch;
              rocket.active = rockets[i].active;
              rocket.favorite = true;
              this.rockets.push(rocket);
            }
            this.onLoad.emit(this.rockets.length);
          }, error => {
            console.error(error);
          });
        break;
      }
    }
  }

}
