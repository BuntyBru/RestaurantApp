import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { ResHeadComponent } from './res-head/res-head.component';
import {DataService} from './data.service';


import {Routes, RouterModule} from '@angular/router';
import { ResDetailsComponent } from './res-details/res-details.component';
import { ReviewsComponent } from './reviews/reviews.component';

const appRoutes: Routes = [
  {path:'', component:MapComponent},
  {path:'restaurant',component:ResHeadComponent},
  {path:'restaurant/details',component:ResDetailsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    ResHeadComponent,
    ResDetailsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
