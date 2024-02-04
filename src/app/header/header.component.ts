import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { AdminService } from '../Services/admin.service';
import { product } from '../data-type';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,HttpClientModule],

  providers: [ProductService, Router, UserService, AdminService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default';
  adminName:string='';
  userName:string='';
  searchResult:undefined|product[];
  cartItems = 0;

  constructor(private router: Router, private product:ProductService) { }

  ngOnInit(): void {

    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('admin') && val.url.includes('admin')) {
         let adminStore=localStorage.getItem('admin');
         let adminData =adminStore && JSON.parse(adminStore)[0];
         this.adminName=adminData.name;
          this.menuType = 'admin';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
          this.product.getCartList(userData.id);
        }
         else {
          this.menuType = 'default';
        }
      }
    });

    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems= items.length
    })
  
  }

  
logout(){
  localStorage.removeItem('admin');
  this.router.navigate(['/'])
}

userlogout(){
  localStorage.removeItem('user');
  this.router.navigate(['user-auth']);
  this.product.cartData.emit([]);
}

searchProduct(query:KeyboardEvent){
  if(query){
    const element = query.target as HTMLInputElement;
    this.product.searchProduct(element.value).subscribe((result)=>{
     
      if(result.length>5){
        result.length=length
      }
      this.searchResult=result;
    })
  }
}

hideSearch(){
  this.searchResult=undefined
}
redirectToDetails(id:number){
  this.router.navigate(['/details/'+id])
}
submitSearch(val:string){
this.router.navigate([`search/${val}`]);
}


}