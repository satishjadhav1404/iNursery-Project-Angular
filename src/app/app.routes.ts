import { Routes } from '@angular/router';


import { HomeComponent } from './Admin/home/home.component';


import { SearchComponent } from './search/search.component';
import { AdminAuthComponent } from './Admin/admin-auth/admin-auth.component';
import { UserAuthComponent } from './User/user-auth/user-auth.component';
import { authGuard } from './auth.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FooterComponent } from './footer/footer.component';
import { PlantsComponent } from './plants/plants.component';

export const routes: Routes = [

    {path:'home', component: HomeComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },

    {path:'admin-home',component: AdminHomeComponent, 
    canActivate:[authGuard]},

    {path:'admin-auth', component:AdminAuthComponent},

    { path:'admin-add-product', component:AdminAddProductComponent,
    canActivate:[authGuard]},

    {path:'user-auth', component:UserAuthComponent},

    {path:'search/:query',  component: SearchComponent},

    {path:'product-details/:productId', component:ProductDetailsComponent},

    {path:'cart',component:CartComponent},

    {path:'checkout', component:CheckoutComponent},

    {path:'my-orders',component:MyOrdersComponent},

    {path:'plants', component:PlantsComponent}

    
];
