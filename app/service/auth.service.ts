import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='http://localhost:3000/user'
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.apiurl);  
  }
  getByCode(code:any){
     return this.http.get(this.apiurl+'/'+code);
  }
  GetAllRole(){
    return this.http.get("http://localhost:3000/role");
  }

  register(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

  Updateuser(inputdata:any,code:any){
    return this.http.put(this.apiurl+'/'+code,inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  
  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
}
