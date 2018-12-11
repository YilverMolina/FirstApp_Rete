import { Component, OnInit } from '@angular/core';
import BpmnViewer from 'bpmn-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-process-viewer',
  templateUrl: './process-viewer.component.html',
  styleUrls: ['./process-viewer.component.sass']
})
export class ProcessViewerComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var viewer = new BpmnViewer({
      container: '#canvas'
    });
    const url = './assets/resources/model.xml';
    //const url = './assets/canvas.png';
    this.http.get(url)
      .toPromise()
      .then(response => {
        response.toString()
      })
      .then(data => {
        viewer.importXML(data, this.handleError)
        console.log(data)
      })
      .catch(this.handleError);
  }

  handleError(err: any) {
    if (err) {
      console.log('error rendering', err);
    } else {
      console.log('rendered');
    }
  }
}