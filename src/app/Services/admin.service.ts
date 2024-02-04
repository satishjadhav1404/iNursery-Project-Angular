import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  isAdminLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError= new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
 
  reloadAdmin(){
    if(localStorage.getItem('admin')){
      this.isAdminLoggedIn.next(true);
      this.router.navigate(['admin-home'])
    }
  }

  userSignUp(data: signUp) {
   let result= this.http.post('http://localhost:3000/admin', data,
   {observe:'response'}).subscribe((result)=>{
    this.isAdminLoggedIn.next(true);
    localStorage.setItem('admin',JSON.stringify(result.body))
    this.router.navigate(['admin-home']);
    console.warn("result",result);

   })
   
   return false
 
  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     console.warn(result)
     if(result && result.body && result.body.length){
      this.isLoginError.emit(false)
      localStorage.setItem('admin',JSON.stringify(result.body))
      this.router.navigate(['admin-home'])

     }else{
       console.warn("login failed");
       this.isLoginError.emit(true)
     }
    })
   }

}