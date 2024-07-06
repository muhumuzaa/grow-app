import { Component, OnInit } from '@angular/core';
import { Job, fake_jobs } from 'src/app/fake_jobs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job: Job | undefined;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.job = fake_jobs.find(job => job.id === jobId);
  }

}
