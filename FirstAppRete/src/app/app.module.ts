import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessViewerComponent } from './components/process-viewer/process-viewer.component';
import { ReteComponent } from './components/rete/rete.component';
import { EditorComponent } from './components/process-viewer/editor/editor.component';
import { TaskComponent } from './components/process-viewer/editor/events/task/task.component';
import { SubProcessComponent } from './components/process-viewer/editor/events/sub-process/sub-process.component';
import { StartEventComponent } from './components/process-viewer/editor/events/start-event/start-event.component';
import { EndEventComponent } from './components/process-viewer/editor/events/end-event/end-event.component';
import { GatewayComponent } from './components/process-viewer/editor/events/gateway/gateway.component';

import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProcessViewerComponent,
    ReteComponent,
    EditorComponent,
    TaskComponent,
    SubProcessComponent,
    //StartEventComponent,
    EndEventComponent,
    GatewayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
