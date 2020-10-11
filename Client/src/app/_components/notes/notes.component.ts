import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { NoteService } from '../../_services/note.service';
import  { AuthenticationService } from '../../_services/authentication.service';
import { Note } from '../../_models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  providers: [ NoteService ]
})
export class NotesComponent implements OnInit {

  @Input() id: number;
  @Output() onLoad: EventEmitter<number> = new EventEmitter<number>();
  public notes: Array<any>;
  public currentPage: number;
  public maxPages: number;

  constructor(
    private noteService: NoteService, 
    private authService: AuthenticationService
  ) {
    this.notes = [];
    this.currentPage = 1;
    this.maxPages = 1;
  }

  ngOnInit() {
    this.getNotes();  
  }

  onLoadMore() {
    this.currentPage++;
    this.getNotes(this.currentPage);
  }

  getNotes(page=1){
    this.noteService.getNotes(page)
	    .subscribe(res => {
        let notes = JSON.parse(res._body);
        if(notes.length != 0) {
          this.notes = notes;
        }
        this.onLoad.emit(this.notes.length);
	    }, error => {
	      console.error(error);
	    });
  }

  onAddNote() {
    this.noteService.addNote()
      .subscribe(res => {
        this.notes.push(new Note());
        this.onLoad.emit(this.notes.length);
        this.getNotes();
      }, error => {
        console.error(error);
      });
  }

  deleteNote(event) {
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == +event) {
        this.notes.splice(i, 1);
        break;
      }
    }
  }

  updateNote(event) {
    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id == event.id) {
        this.notes[i].content = event.content;
        break;
      }
    }
  }

}
