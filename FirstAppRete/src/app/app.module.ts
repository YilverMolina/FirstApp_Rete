import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessViewerComponent } from './components/process-viewer/process-viewer.component';
import { ReteComponent } from './components/rete/rete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessViewerComponent,
    ReteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
