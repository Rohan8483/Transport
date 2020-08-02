import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {


      islogin:boolean=false;


              setlogin(b:boolean){
                this.islogin=b;
              }


              getlogin(){
                return this.islogin;
              }



  constructor() { }
}
