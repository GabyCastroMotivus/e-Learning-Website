import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component'; // Ensure this import is correct
import { JavascriptComponent } from './javascript/javascript.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { JqueryComponent } from './jquery/jquery.component';
import { JavaComponent } from './java/java.component';
//import { SqlComponent } from './sql-component/sqlCourse.component;


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent }, // Add this line for the homepage route
  { path: 'javascript', component: JavascriptComponent },
  { path: 'css', component: CssComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'jquery', component: JqueryComponent },
  { path: 'java', component: JavaComponent },
  //{ path: 'sql', component: SqlComponent },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }