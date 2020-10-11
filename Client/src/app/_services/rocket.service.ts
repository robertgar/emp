import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Rocket } from '../_models/rocket.model';

@Injectable()
export class RocketService {
  
  public token: string;
  private headers: Headers;
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: Http) { 
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('user'));
    this.token = currentUser && currentUser.token;

    //append headers
    this.headers = new Headers({ 'Authorization': this.token, 'Content-Type': 'application/json' });
    this.headers.append("Access-Control-Allow-Origin", "*");
    this.headers.append("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type, Accept");
  }


  searchRockets(rocket: Rocket, page=1): Observable<any> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    let url = this.apiUrl+'/rocket?favorite=0';
    if(rocket.name)
      url += '&name='+rocket.name;
    if(rocket.boosters)
      url += '&boosters='+rocket.boosters;
    if(rocket.costPerLaunch)
      url += '&cost_per_launch='+rocket.costPerLaunch;
    if(rocket.active == true )
      url += '&active=true';
      if(rocket.active == false)
      url += '&active=false';
    return this.http.get(url, options)
        .map((response: Response) => {
            return response;
        });
  }

  /* FAKE search
  searchRockets(rocket: Rocket, page=1){
  	return Observable.of(new Object()).mapTo(
  	  { 
  	  	"rockets": 
  	  	  [
		  	{
		  		"id": 1,
		  		"name": 'Rocket 1',
		  		"boosters": '0',
		  		"costPerLaunch": '0',
		  		"active": false,
		  		"favorite": true
		  	},
		  	{
		  		"id": 2,
		  		"name": 'Rocket 2',
		  		"boosters": 1,
		  		"costPerLaunch": 13,
		  		"active": true,
		  		"favorite": false
		  	},
  	      ],
  	  	"pages": "5"
  	  }
  	);
  }
  */

  favoriteRockets(page=1): Observable<any> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    let url = this.apiUrl+'/rocket?favorite=1';
    return this.http.get(url, options)
        .map((response: Response) => {
            return response;
        });
    //return this.searchRockets(new Rocket(), page);
  }


  chageFavoriteStatus(id): Observable<any> {
  	let options = new RequestOptions({ headers: this.headers }); // Create a request option
    let request = JSON.stringify({ rocket_id: id });
    let url = this.apiUrl+'/rocket';
    return this.http.post(url, request, options)
        .map((response: Response) => {
            return response;
        });
    //return Observable.of(new Object()).mapTo(true);
  }

}
