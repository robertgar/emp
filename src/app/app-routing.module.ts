import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import {AuthHomeComponent} from './auth/home/auth-home/auth-home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home',
  },
  {
    path: 'home', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'auth-home', pathMatch: 'full', component: AuthHomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
