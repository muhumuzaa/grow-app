import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { JobsListComponent } from './pages/jobs-list/jobs-list.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobContactComponent } from './pages/job-contact/job-contact.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { JobFormComponent } from './components/job-form/job-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JobsListComponent,
    MyJobsComponent,
    JobDetailsComponent,
    JobContactComponent,
    JobCardComponent,
    EditJobComponent,
    CreateJobComponent,
    JobFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
