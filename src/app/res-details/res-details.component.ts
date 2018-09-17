import { Component, OnInit } from '@angular/core';
import {DemoService} from '../demo.service'
import {Restaurant} from '../resData';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../data.service';
import {Review} from '../resData';

@Component({
  selector: 'app-res-details',
  templateUrl: './res-details.component.html',
  styleUrls: ['./res-details.component.css']
})
export class ResDetailsComponent implements OnInit {


restaurant_details:Observable<Restaurant>;
restaurant_reviews:Observable<Review>;

ans:Restaurant;
  constructor(private demoService:DemoService,private dataService:DataService) { }

  ngOnInit() {
  this.restaurant_details=this.demoService.todos1;	
  this.restaurant_reviews=this.demoService.todosReview;
  }




}
