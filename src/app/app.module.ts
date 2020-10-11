import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './public/home/home.component';
import { FullBannerComponent } from './public/home/full-banner/full-banner.component';
import { ProjectsComponent } from './public/projects/projects.component';
import { SingleProjectComponent } from './public/projects/single-project/single-project.component';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './common/interceptors';
import { FixImageUrlPipe } from './common/pipes/fix-image-url.pipe';
import { GetFieldByLocalePipe } from './common/pipes/get-field-by-locale.pipe';
import { AuthHomeComponent } from './auth/home/auth-home/auth-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FullBannerComponent,
    ProjectsComponent,
    SingleProjectComponent,
    FixImageUrlPipe,
    GetFieldByLocalePipe,
    AuthHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
