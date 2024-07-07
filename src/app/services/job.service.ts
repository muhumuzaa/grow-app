import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fake_jobs } from '../fake_jobs';
import { Job } from '../fake_jobs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
 
constructor() { }

  getAllJobs(): Observable<Job[]> {
    return of(fake_jobs);
  }

  getJobById(id: string): Observable<Job | undefined> {
    const job = fake_jobs.find(job => job.id === id);
    return of(job);
  }
}
