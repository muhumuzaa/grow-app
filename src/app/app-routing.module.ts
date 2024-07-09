import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JobsListComponent} from './pages/jobs-list/jobs-list.component'
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobContactComponent } from './pages/job-contact/job-contact.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';

const routes: Routes = [
  {path: '', redirectTo: 'jobs-list', pathMatch: 'full'},
  {path: 'jobs-list', component: JobsListComponent},
  {path: 'my-jobs', component: MyJobsComponent},
  {path: 'job-details/:id', component: JobDetailsComponent},
  {path: 'job-contact/:id', component: JobContactComponent},
  {path: 'edit-job/:id', component: EditJobComponent},
  {path: 'create-job', component: CreateJobComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
