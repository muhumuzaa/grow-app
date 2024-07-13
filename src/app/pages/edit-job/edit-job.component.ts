import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from 'src/app/fake_jobs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  job$: Observable<Job | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: JobService
  ) { }

  ngOnInit() {
    const jobId = this.route.snapshot.paramMap.get('id');
    if(jobId){
    this.job$ = this.service.getJobById(jobId);
    }
  }

  onUpdate(): void{
    alert("Your job has been updated successfully!");
    this.router.navigateByUrl("/my-jobs");
  }

}
