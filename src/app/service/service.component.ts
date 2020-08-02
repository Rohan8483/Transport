import { Component, OnInit, Input } from '@angular/core';
import {GuardService} from '../guard.service';
import {ActivatedRoute, Router} from "@angular/router";
import {DemoService} from '../demo.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  userform:FormGroup;
 
   constructor(private temp:DemoService,private r:Router) { }
 
  

   ngOnInit() {
      this.userform=new FormGroup({
        id:new FormControl(''),
        src:new FormControl('',[Validators.required,Validators.minLength(2)]),
        desti:new FormControl('',[Validators.required,Validators.minLength(2)]),
        date:new FormControl('',Validators.required),
        descri:new FormControl('',[Validators.required,Validators.maxLength(50)]),
        mobileno:new FormControl('',[Validators.required,Validators.maxLength(10)]),
        })

        this.ftchData();

        // this.logout();
   }
  
   logout(){
    this.r.navigate(['/home']);
   }

   ftchData()
   {
    this.temp.showdata().subscribe((r:any)=>this.res=r);   
   }
   demo(){
    this.temp.SaveData(this.userform.value).subscribe(e=>this.ftchData());

   }
   
   tp:any={};

   delete(i)
    {
      
      this.tp.id=this.res[i].id;
      
      console.log(this.tp);

      this.temp.delete(this.tp).subscribe(r=>this.ftchData()  );
    }     

   res:any[]=[];

   update()
    {
      
    
      

      this.temp.update(this.model2).subscribe(r=>this.ftchData());
    
    }
model2:any={};
    edit(i){
this.model2.id=this.res[i].id;
this.model2.src=this.res[i].src;
this.model2.desti=this.res[i].desti;
this.model2.date=this.res[i].date;
this.model2.mobileno=this.res[i].mobileno;
this.model2.descri=this.res[i].descri;
            
    }

   


  }
