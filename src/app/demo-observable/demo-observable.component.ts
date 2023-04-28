import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html',
  styleUrls: ['./demo-observable.component.css']
})
export class DemoObservableComponent implements OnInit {

  constructor() { }
  myobservable=of(20,30,40)
  myObserver={
    next:(value:number)=>console.log(value),
    error:(err:Error)=>console.log(err),
    complete:()=>console.log("Task is completed")
  };

  ngOnInit(): void {
    this.myobservable.subscribe((val)=>{console.log(val);})
    //this.myObservable.subscribe((value)=>{console.log(value))
      this.myobservable.subscribe(this.myObserver)
      setTimeout(()=>{
        this.myobservable.subscribe({
          next(num){console.log("2nd subscription"+num);},
          complete(){console.log("2nd subscription completed");}
        })
      },3000)
  }

}
