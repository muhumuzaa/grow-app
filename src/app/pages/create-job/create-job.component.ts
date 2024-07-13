import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from 'src/app/fake_jobs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {


  constructor(private router: Router, ) {}

  ngOnInit(): void {
    
  }
  onCreate(): void{
    
      alert("New Job has been created.")
   
    
    this.router.navigateByUrl("/my-jobs");
  }
}
