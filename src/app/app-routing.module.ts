import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Auth1Guard } from './auth1.guard';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MovieDetialsComponent } from './component/movie-detials/movie-detials.component';
import { MoviesComponent } from './component/movies/movies.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PeopleComponent } from './component/people/people.component';
import { RegisterComponent } from './component/register/register.component';
import { TvComponent } from './component/tv/tv.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:"full"},
  {path:'home' ,canActivate:[AuthGuard], component: HomeComponent},
  {path:'about',canActivate:[AuthGuard], component: AboutComponent},
  {path:'tv',canActivate:[AuthGuard], component: TvComponent},
  {path:'people', component: PeopleComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'movies', component: MoviesComponent},
  {path:'MovieDetails/:id', canActivate:[AuthGuard],component: MovieDetialsComponent},
  {path:'**', component: NotFoundComponent},
  {path:'home/movies', component: MoviesComponent},

  {path: 'settings',loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
