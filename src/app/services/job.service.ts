import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { fake_jobs } from '../fake_jobs';
import { Job } from '../fake_jobs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class JobService {
 
constructor(private firestore: AngularFirestore) { }

  getAllJobs(): Observable<Job[]> {
    //return of(fake_jobs);
    return this.firestore.collection<Job>('jobs').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Job;
        const id = a.payload.doc.id;
        return {...data, id};
      }))
    )
  }

  getJobById(id: string): Observable<Job | undefined> {
    // const job = fake_jobs.find(job => job.id === id);
    // return of(job);
    return this.firestore.doc<Job>(`jobs/${id}`).snapshotChanges().pipe(
      map(action =>{
        const data = action.payload.data();
        const id = action.payload.id;
        if(data){
          return { ...data, id};
        } return undefined;
      })
    )
  }

  

}
