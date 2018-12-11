//import { OnInit } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { Component, Output } from 'rete';
//import { numSocket } from '../sockets';

import { Socket } from 'rete';
export const numSocket = new Socket('Number value');

import { StartEventControl } from './control/start-event.control';

/*@Component({
  selector: 'app-start-event',
  templateUrl: './start-event.component.html',
  styleUrls: ['./start-event.component.sass']
})*/
export class StartEventComponent extends Component {

  constructor() {
    super('Number');
  }

  builder(node) {
    const out1 = new Output('num', 'Number', numSocket);
    return node.addControl(new StartEventControl(this.editor, 'num')).addOutput(out1);
  }

  worker(node, inputs, outputs) {
    outputs['num'] = node.data.num;
  }
}