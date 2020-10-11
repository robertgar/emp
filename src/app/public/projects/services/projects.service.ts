import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  constructor(
    public http: HttpClient,
  ) { }

  getProjects(): Observable<Array<Project>> {
    const serviceURL = 'http://funding-backend.webtraining.fun/api/v1/projects';
    return this.http.get<Array<Project>>(serviceURL);
  }
}
