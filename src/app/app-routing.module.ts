import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsListComponent} from './pages/jobs-list/jobs-list.component'
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobContactComponent } from './pages/job-contact/job-contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'jobs-list', pathMatch: 'full'},
  {path: 'jobs-list', component: JobsListComponent},
  {path: 'my-jobs', component: MyJobsComponent},
  {path: 'job-details/:id', component: JobDetailsComponent},
  {path: 'job-contact/:id', component: JobContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
