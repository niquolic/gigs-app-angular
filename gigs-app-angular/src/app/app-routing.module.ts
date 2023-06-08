import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './layouts/login/login.component';
import { AddGigsComponent } from './pages/add-gigs/add-gigs.component';
import { EditGigComponent } from './pages/edit-gig/edit-gig.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-gigs', component: AddGigsComponent},
  { path: 'edit-gig', component: EditGigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
