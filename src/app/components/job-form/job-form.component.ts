import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from 'src/app/fake_jobs';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
 
  jobForm!: FormGroup;

  @Input() btnText: string = '';
  @Input() jobData: Job | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobTitle: [this.jobData?.title || '', Validators.required],
      company: [ this.jobData?.company || '', Validators.required],
      description: [this.jobData?.description || '', Validators.required]
    })
  }

  onSubmit(): void{
    console.log(this.jobForm)
    if(this.jobForm.valid){
      alert("Your job was created successfully");
      this.router.navigateByUrl("/my-jobs");
    }else{
      this.jobForm.markAllAsTouched();
    }
  }
}
