import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { signUp } from '../../data-type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderComponent],
  providers:[AdminService,ProductService,UserService],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.scss'
})
export class AdminAuthComponent implements OnInit  {
  showLogin=false;
  authError:String='';

  constructor(private admin:AdminService, private router:Router) { }
  
  ngOnInit(): void {
    this.admin.reloadAdmin()
  }

  signUp(data: signUp): void {
    
   this.admin.userSignUp(data);
  
  }
  
  login(data: signUp): void {
    this.admin.userLogin(data)
    this.admin.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is incorrect";
      }
    })

  }

  openLogin(){
    this.showLogin=false
  }
  openSignUp(){
    this.showLogin=true
  }

  }

