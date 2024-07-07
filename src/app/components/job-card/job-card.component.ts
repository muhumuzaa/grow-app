import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/fake_jobs';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job | undefined;
  
  @Input() applyButton: Boolean = false;
  @Input() editButton: Boolean = false;
  @Input() deleteButton: Boolean = false;


  constructor() { }

  ngOnInit() {

  }

}
