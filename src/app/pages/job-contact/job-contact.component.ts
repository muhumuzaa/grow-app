import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fake_jobs, Job } from 'src/app/fake_jobs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-contact',
  templateUrl: './job-contact.component.html',
  styleUrls: ['./job-contact.component.css']
})
export class JobContactComponent implements OnInit {

  job: Job | undefined;
  jobForm!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    this.job = fake_jobs.find(job => job.id === jobId);

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
