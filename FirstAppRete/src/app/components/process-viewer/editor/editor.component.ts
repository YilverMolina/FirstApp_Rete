import {
  Component, AfterViewInit,
  OnChanges, ViewChild,
  ElementRef, Input, ViewEncapsulation
} from '@angular/core';

import { NodeEditor, Engine } from 'rete';
import * as ConnectionPlugin from 'rete-connection-plugin';
import * as VueRenderPlugin from 'rete-vue-render-plugin';
// import { NumComponent } from './components/number-component';
// import { AddComponent } from './components/add-component';

import { StartEventComponent } from "./events/start-event/start-event.component";
import { EndEventComponent } from "./events/end-event/end-event.component";
import { GatewayComponent } from "./events/gateway/gateway.component";
import { TaskComponent } from "./events/task/task.component";
import { SubProcessComponent } from "./events/sub-process/sub-process.component";

//const components = [new NumComponent(), new AddComponent()];
const components = [
  new StartEventComponent()
  /*new EndEventComponent(),
  new GatewayComponent(),
  new TaskComponent(),
  new SubProcessComponent()*/
];

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass'],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements AfterViewInit {

  @ViewChild('nodeEditor') el: ElementRef;
  editor = null;

  async ngAfterViewInit() {
    const self = this;

    const container = this.el.nativeElement;

    this.editor = new NodeEditor('demo@0.2.0', container);
    this.editor.use(ConnectionPlugin);
    this.editor.use(VueRenderPlugin);

    const engine = new Engine('demo@0.2.0');

    components.map(c => {
      this.editor.register(c);
      engine.register(c);
    });

    const n1 = await components[0].createNode({ num: 2 });
    const n2 = await components[0].createNode({ num: 0 });
    //const add = await components[1].createNode();

    n1.position = [80, 200];
    n2.position = [80, 400];
    //add.position = [500, 240];

    this.editor.addNode(n1);
    this.editor.addNode(n2);
    //this.editor.addNode(add);

    //this.editor.connect(n1.outputs.get('num'), add.inputs.get('num1'));
    //this.editor.connect(n2.outputs.get('num'), add.inputs.get('num2'));


    this.editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
      await engine.abort();
      await engine.process(this.editor.toJSON());
    });

    this.editor.view.resize();
    this.editor.trigger('process');
  }

  async addNode(event: any) {
    const n1 = await components[0].createNode({ num: 2 });
    n1.position = [85, 207];
    this.editor.addNode(n1);
  }
}

