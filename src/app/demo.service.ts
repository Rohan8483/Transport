import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private temp:HttpClient){ }

  public setreg(x)
  {
  
   return this.temp.post("http://localhost:8080/website/demo",x);
 
  }
  
  public getdata(y)
    {
      return this.temp.post("http://localhost:8080/website/login",y);
    }

    showdata()
    {
      return this.temp.get("http://localhost:8080/website/servicefetch");
    }

    SaveData(x)
    {
    return this.temp.post("http://localhost:8080/website/servicedata",x);
    }

    delete(x){
      return this.temp.post("http://localhost:8080/website/delete",x);
    }

    update(x)
    {
        return this.temp.post("http://localhost:8080/website/Updateservlet",x);
    }

}
