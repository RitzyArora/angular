
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, filter, from, fromEvent, interval, map, Observable, of, retry } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
//-------------------------------------------------------------------------------------  
//arrayOfNumbers=[1,2,3,4];
//myobservable=from(this.arrayOfNumbers).pipe(map((val)=>{return val*5;}),filter((val)=>{return val>=10}));*/
//transformedobs=this.myobservable.pipe(map((val)=>{return val*5;}),filter((val)=>{return val>=20}));
//filteredobs=this.myobservable.pipe(filter((val)=>{return val>=2}));
//constructor()
//{




//-------------------------------------------------------------------------------
  
  // constructor()
  // {
  // // Create an Observable that will publish a value on an interval
  // const secondsCounter = interval(1000);
  // // Subscribe to begin publishing values
  // const subscription = secondsCounter.subscribe(n =>
  //   console.log(`It's been ${n} seconds since subscribing!`));

  // }
  


  //-----------------------------------------------------------------------------------
 // https://jsonplaceholder.typicode.com/users

 
 // Create an Observable out of a promise
//   data = from(fetch('https://jsonplaceholder.typicode.com/users'));
 
// constructor()
// {
//  this.data.subscribe({
//    next(response) { console.log(response); },
//    error(err) { console.error('Error: ' + err); },
//    complete() { console.log('Completed'); }
//  });
// }
//------------------------------------------------------------------------------------
/* myObservable=new Observable((observer)=>
 {
   console.log("Observable is started from here")
   setTimeout(()=>{observer.next(20)},2000),
   setTimeout(()=>{observer.next(40)},4000),
   setTimeout(()=>{observer.next(30)},3000)
 
  }
 );*/

//  myobservable=of(20,30,40)
//  myObserver={
//    next:(value:number)=>console.log(value),
//    error:(err:Error)=>console.log(err),
//    complete:()=>console.log("Task is completed")
//  };
 //-----------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    //----------------------------------------------------------------------
    //this.myObservable.subscribe((value)=>{console.log(value))
    // this.myobservable.subscribe(this.myObserver)
    // setTimeout(()=>{
    //   this.myobservable.subscribe({
    //     next(num){console.log("2nd subscription"+num);},
    //     complete(){console.log("2nd subscription completed");}
    //   })
    // },3000)
  //--------------------------------------------------------------------------------------------
// const e1=document.getElementById('element')!;
// const mouseMove=fromEvent<MouseEvent>(e1,'mousemove');
// mouseMove.subscribe((e)=>{
//   console.log("event triggered");
// });
//----------------------------------------------------------------------------------------------

//this.myobservable.subscribe(this.myObserver)

//----------------------------------------------------------------------------------------------
// let source=new Observable((observer)=>{
//   observer.next('a');
//   observer.next('b');
//   observer.error("Error occured");
// });
 //source.subscribe({next:(data)=>{console.log(data)},complete:()=>{console.log("Complete")}});
// source.pipe(catchError((error)=>{return of(1,2,3,4);})).subscribe({next:(data)=>{console.log(data)},complete:()=>{console.log("Complete")}});
//for retry operator
//source.pipe(retry(2)).subscribe({next:(data)=>{console.log(data)},complete:()=>{console.log("Complete")}})
}


}