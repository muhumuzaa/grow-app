import { Component, OnInit } from '@angular/core';
import { fake_jobs, Job } from 'src/app/fake_jobs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {

  jobs: Job[] =[];
  constructor(private service: JobService) { }

  ngOnInit(): void {
    this.service.getAllJobs().subscribe(data => this.jobs = data);
  }

}
