import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(event) {
    event.preventDefault();
    const email = 'esmeralda@webtraining.zone';
    const password = 'esmeralda';

    this.authService.login(email, password).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.error(error);
      },
    );
  }

}
