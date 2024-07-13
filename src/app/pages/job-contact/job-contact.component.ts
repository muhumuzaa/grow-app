import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fake_jobs, Job } from 'src/app/fake_jobs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-contact',
  templateUrl: './job-contact.component.html',
  styleUrls: ['./job-contact.component.css']
})
export class JobContactComponent implements OnInit {

  job$: Observable<Job | undefined> | undefined;
  jobForm!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: JobService
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    //this.job = fake_jobs.find(job => job.id === jobId);
    console.log(jobId)
    if(jobId){
      this.job$ = this.service.getJobById(jobId);
    }

    this.jobForm = this.fb.group({
      fullName: ['',],
      email: [''],
      message: [''],
    });

  }

  onSubmit(): void{
    alert("Your application was submited successfully");
    this.router.navigateByUrl('/jobs-list');
    }

}
