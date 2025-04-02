import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavaComponent } from './java/java.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { SqlComponent } from './sql-component/sqlCourse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    HtmlComponent,
    CssComponent,
    JavaComponent,
    JavascriptComponent,
    JqueryComponent,
    SqlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
