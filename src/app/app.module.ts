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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JobsListComponent,
    MyJobsComponent,
    JobDetailsComponent,
    JobContactComponent
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
