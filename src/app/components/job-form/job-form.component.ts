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
  @Input() btnText: string ="";

  @Input() jobData: Job | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobTitle: [ this.jobData?.title || '', Validators.required],
      company: [this.jobData?.company || '', Validators.required],
      description: [this.jobData?.description || '', Validators.required]
    })
  }

  onSubmit(): void{
    if(this.jobForm.valid){
      if(this.jobData){
        alert("You have successfully updated your Job..."); 
      }
      else{ alert("You have successfully created a new job.")

      }
      this.router.navigateByUrl("/my-jobs");
      
    }else{
      this.jobForm.markAllAsTouched();
    }
  }
}
