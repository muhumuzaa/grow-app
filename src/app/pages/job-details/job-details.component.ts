import { Component, OnInit } from '@angular/core';
import { Job, fake_jobs } from 'src/app/fake_jobs';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job$:  Observable<Job | undefined> | undefined;
  constructor( 
    private route: ActivatedRoute,
    private service: JobService
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if(jobId){
    this.job$ = this.service.getJobById(jobId);
    }
  }

}
