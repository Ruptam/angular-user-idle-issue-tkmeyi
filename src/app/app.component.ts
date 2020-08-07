import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  private count:number=1;
  public anotherCount:number=1;
  public math=Math;

  constructor(private userIdle: UserIdleService) {
  }

  public getCount(){
    return this.count+=1;
  }

  ngOnInit(){

    // TEST HERE
    // If you do not start watch, then the app looks good.
   this.userIdle.startWatching();
  }
}
