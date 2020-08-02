import { Component } from '@angular/core';
import {DemoService} from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transport';

  constructor(private temp:DemoService){

  }

  



    path="./assets/camill.jpg";




}
