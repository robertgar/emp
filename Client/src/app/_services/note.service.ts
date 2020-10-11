import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Note } from '../_models/note.model';

@Injectable()
export class NoteService {

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

  getNotes(page=1): Observable<any> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.get(this.apiUrl+'/notes', options)
        .map((response: Response) => {
            return response;
        });

    /*
    return Observable.of(new Object()).mapTo(
  	  { 
  	  	"notes": 
  	  	  [
		  	{
		  		"id": 1,
		  		"content": 'Note 1'
		  	},
		  	{
		  		"id": 2,
		  		"content": 'Note 2'
		  	},
  	      ],
  	  	"pages": "5"
  	  }
  	);
    */
  }

  addNote(): Observable<any> {
    let request = JSON.stringify({ content: "" });
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.post(this.apiUrl+'/notes', request, options)
        .map((response: Response) => {
            return response;
        });
    /*
    return Observable.of(new Object()).mapTo(
  	  { 
		  	"id": 0,
		  	"content": 'New Note'
  	  }
  	);
    */
  }

  deleteNote(id: number) {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.delete(this.apiUrl+'/notes/'+id, options)
        .map((response: Response) => {
            return response;
        });
    //return Observable.of(new Object()).mapTo(true);
  }

  updateNote(id: number, content: string) {
    let request = JSON.stringify({ content: content });
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    //console.log(id+':'+content);
    return this.http.put(this.apiUrl+'/notes/'+id, request, options)
        .map((response: Response) => {
            return response;
        });
    //return Observable.of(new Object()).mapTo(true);
  }

}
