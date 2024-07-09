import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  createForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit(): void{
    
    if(this.createForm.valid){
      alert("Your job was created successfully");
      this.router.navigateByUrl("/my-jobs");
    }
    else{
      this.createForm.markAllAsTouched();
    }
  }

}
