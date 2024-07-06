import { Component, OnInit } from '@angular/core';
import { Job, fake_jobs } from 'src/app/fake_jobs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobs: Job[] =[];
  constructor() { }

  ngOnInit(): void {
    this.jobs = fake_jobs
  }

}
