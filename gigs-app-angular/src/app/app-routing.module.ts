import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddGigsComponent } from './pages/add-gigs/add-gigs.component';
import { EditGigComponent } from './pages/edit-gig/edit-gig.component';
import { CallbackSpotifyComponent } from './components/callback-spotify/callback-spotify.component';
import { StatsGigsComponent } from './pages/stats-gigs/stats-gigs.component';

function AuthGuard(): any {
  const isAuthenticated : boolean = !!localStorage.getItem('token');
  return isAuthenticated || inject(Router).parseUrl('/login');
}
const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate:[() => AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add-gigs', component: AddGigsComponent},
      { path: 'edit-gig', component: EditGigComponent},
      { path: 'callback', component: CallbackSpotifyComponent},
      { path: 'stats-gigs', component: StatsGigsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
