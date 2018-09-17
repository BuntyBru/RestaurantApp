import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {DemoService} from  '../demo.service';
import {ResData} from '../resData';
import {Restaurant} from '../resData';
import {Observable} from 'rxjs/Observable';




@Component({
  selector: 'app-res-head',
  templateUrl: './res-head.component.html',
  styleUrls: ['./res-head.component.css']
})
export class ResHeadComponent implements OnInit {
	
//restList:Observable<Array<Restaurant>>=this.demoService.listData$;

//public restList:Restaurant;

restList = this.demoService.todos;

  constructor(private dataService:DataService, private demoService:DemoService) { }


  ngOnInit() {}

  onClick(k)
  {
  	console.log(k.restaurant.R.res_id);
    this.dataService.identity = k.restaurant.R.res_id;
    this.demoService.getRestDetail(this.dataService.identity);
    this.demoService.getRestReviews(this.dataService.identity);
  }





}
