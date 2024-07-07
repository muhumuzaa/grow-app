import { Component, OnInit } from '@angular/core';
import { Job, fake_jobs } from 'src/app/fake_jobs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobs: Job[] =[];

  constructor( 
    private service: JobService
  ) { }

  ngOnInit(): void {
    this.service.getAllJobs().subscribe(data => this.jobs = data);
  }

}
