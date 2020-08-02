import { Component, OnInit } from '@angular/core';
import {DemoService} from '../demo.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dem:DemoService) { }
res:any[]=[];
  ngOnInit() {
    this.dem.showdata().subscribe((r:any)=>this.res=r);
  }

}
