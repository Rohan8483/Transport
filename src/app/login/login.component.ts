import { Component, OnInit } from '@angular/core';
import {GuardService}  from '../guard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DemoService} from '../demo.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private tem:DemoService,private p:GuardService , private p1:ActivatedRoute,private r:Router) { }

  ngOnInit() {
  }

//       changeG()
//       {
//         this.p.setlogin(true);
//       }

   data:any={};
   temp:any[]=[];
//       ongo():void
//       {
//         let c=0;
//         this.temp=JSON.parse(localStorage.getItem('info'));

//         for(let i=0;i<this.temp.length;i++)
//         {
//           if(this.temp[i].Email==this.data.name)
//           {
//              c++;
//              break;
//           }
//         }
//         if(c==1)
//         {
//           alert('successs');
//           this.r.navigate(['/Service']);
//         }
//         else{
//           alert('enter valid');
//         }
          
//       }

  path="./assets/img_avatar2.png";
  mg:any={};

    //Method 
    check():void
  {
      this.tem.getdata(this.data).subscribe(d=>this.my(d));
      
         

  }



my(d)
{
  if(d.Msg=='Error')
  {
  alert("password is wrong");
  }
  else if(d.Msg=='admin') 
  {
    alert("successfully");
    this.r.navigate(['/admin']);
  }
  else
  {
    alert("successfully");
     this.r.navigate(['/Service']);
  }
}










}
