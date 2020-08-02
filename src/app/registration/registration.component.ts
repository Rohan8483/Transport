import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DemoService} from '../demo.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  


  //       @Input() Email:string;
  //               model:any={};
  //               e:any[]=[];
  // ngOnInit() {
  //         this.e=JSON.parse(localStorage.getItem("info"));
  // }

  // temp:any[ ]=[];
  //       adduser()
  //       {
  //         this.temp=JSON.parse(localStorage.getItem('info'));
  //         let k=0;
  //         for(let i=0;i<this.temp.length;i++)
  //         {
  //           if(this.temp[i].Email==this.model.Email)
  //           {
  //             k++;
  //             break;
  //           }
  //         }
  //         if(k==1)
  //         {
  //           alert('already registered');
  //         }
  //         else{

          
  //         let emp=JSON.parse(localStorage.getItem("info"));

  //           if(emp==null)
  //           {
  //             emp=[];
  //           }
  //             emp.push(this.model);
  //             localStorage.setItem("info",JSON.stringify(emp));

  //             this.e=JSON.parse(localStorage.getItem("info"));

  //             this.model={};
  //             this.r.navigate(['/Login']);


  //         }    
  //       }



                
// }





        
  // model:any={};
  // temp:any[]=[];


  // e:any[]=[];
 
   
 
  //  ngOnInit() {
  //    this.e=JSON.parse(localStorage.getItem("info"));
  //  }
  //  addEmployee()
  //  {
  //   console.log(this.model);
 
  //   let emp=JSON.parse(localStorage.getItem("info"));
  //   this.temp=JSON.parse(localStorage.getItem("info"))

  //   let k=0;

  //   for(let i=0;i<this.temp.length;i++)
  //   {
  //     if(this.temp[i].Email==this.model.Email)
  //     {
  //       k++;
  //       break;
  //     }
  //   }
  //   if(k==1)
  //   {
  //     alert('alredy registered');
  //   }
  //   else{
  //     if(emp==null)
  //   {
  //     emp=[];
  //   }
  //   emp.push(this.model);
  //    localStorage.setItem("info",JSON.stringify(emp));
  //    this.e=JSON.parse(localStorage.getItem("info"));
 
     
  //        this.model={};
         
  //        this.r.navigate(['/Login']);
  // }








    
  //  }
//    deleteEmployee(i){
//      this.e.splice(i,1);
//      localStorage.setItem("info",JSON.stringify(this.e));
//      this.e=JSON.parse(localStorage.getItem("info"));
//      console.log(i);
//    }
//    myvalue;
//  model2:any={}
 
//    editEmployee(i){
//      console.log(i);
//      this.model2.name=this.e[i].name;
//      this.model2.position=this.e[i].position;
//      this.myvalue=i;
 
//    }
 
//    updateEmployee(){
//      console.log("hello");
//      let k=this.myvalue;
    
//       for(let i=0;i<this.e.length;i++)
//      {
//        console.log(i);
//       if(i==k)
//       {
//         this.e[i]=this.model2;
//         localStorage.setItem("info",JSON.stringify(this.e));
//         this.e=JSON.parse(localStorage.getItem("info"));
//         this.model2={};
//       }
//      } 
  
//     }
 

userform:FormGroup;
countries = ['India','USA', 'Germany', 'Italy', 'France'];

constructor(private temp:DemoService,private r:Router) { }
ngOnInit() 
{
 this.userform=new FormGroup(
 {
   name:new FormControl('',[Validators.required,Validators.minLength(3)]),
   pass:new FormControl('',[Validators.required,Validators.minLength(5)]),
   mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
   gender:new FormControl(),
   country: new FormControl(),
   mobile: new FormControl('',[Validators.required]),
 });
}

// demo(){
//   console.log(this.userform.value.name);
// }
adddata()
{
 // let trend=JSON.parse(localStorage.getItem("first"));
 // if(trend==null)
 // {
 //   trend=[];
 // }
 // trend.push(this.userform.value);
 // localStorage.setItem("first",JSON.stringify(trend));
  //  console.log(this.userform.value);
 this.temp.setreg(this.userform.value).subscribe(d=>this.my(d));
 
}

my(d){
      if(d.Msg=="Email  Exist")
      {
        alert("Email Exist");
      }
      else
        alert("Successfull");

}





path='./assets/camill.jpg';
























}

