import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { DemoObservableComponent } from './demo-observable/demo-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableDemoComponent,
    DemoObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
