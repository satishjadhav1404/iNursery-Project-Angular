import { Component } from '@angular/core';
import { cart, login, product, signUp } from '../../data-type';
import { UserService } from '../../Services/user.service';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService, ProductService,AdminService],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.scss'
})
export class UserAuthComponent {

 showlogin:boolean=true
 authError:string=''

  constructor(private user: UserService, private product: ProductService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }

signUp(data:signUp){
  this.user.userSignUp(data)
  
}
 login(data:login){
this.user.userLogin(data)

   this.user.invalidUserAuth.subscribe((result)=>{
    
      if(result){
        this.authError=" User not found ";
      }else{
        this.localCartToRemoteCart();
      }
    }) 
 }


 openSignUp(){
this.showlogin=false
 }
openLogin(){
this.showlogin=true
}

localCartToRemoteCart(){
  let data = localStorage.getItem('localCart');
  let user = localStorage.getItem('user');
  let userId= user && JSON.parse(user).id;
  if(data){
   let cartDataList:product[]= JSON.parse(data);
 
   cartDataList.forEach((product:product, index)=>{
     let cartData:cart={
       ...product,
       productId:product.id,
       userId
     }
     delete cartData.id;
     setTimeout(() => {
       this.product.addToCart(cartData).subscribe((result)=>{
         if(result){
           console.warn("data is stored in DB");
         }
       })
     }, 500);
     if(cartDataList.length===index+1){
       localStorage.removeItem('localCart')
     }
   })
  }

  setTimeout(() => {
   this.product.getCartList(userId)
  }, 2000);
   
 }

}