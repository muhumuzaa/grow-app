import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
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
  @Output() onBtnClicked= new EventEmitter<Job>();
  @Input() isUpdateMode: boolean = false;

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

  onSubmit(): void {
    if (this.jobForm.valid) {
      if (this.jobData?.id) {
        const updatedJob: Job = {
          id: this.jobData.id,
          title: this.jobForm.value.jobTitle,
          company: this.jobForm.value.company,
          description: this.jobForm.value.description
        };
        this.onBtnClicked.emit(updatedJob);
      } else {
        const newJob: Omit<Job, 'id'> = {
          
          title: this.jobForm.value.jobTitle,
          company: this.jobForm.value.company,
          description: this.jobForm.value.description
        };
        this.onBtnClicked.emit(newJob as Job);
    } 
    }
  }
}
