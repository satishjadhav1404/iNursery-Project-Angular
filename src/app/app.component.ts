import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { HomeComponent } from './Admin/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminAuthComponent } from './Admin/admin-auth/admin-auth.component';
import { UserAuthComponent } from './User/user-auth/user-auth.component';

import { AdminService } from './Services/admin.service';
import { UserService } from './Services/user.service';
import { ProductService } from './Services/product.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { product } from './data-type';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, RouterOutlet,HttpClientModule,RouterModule,NgxBootstrapIconsModule,HttpClientJsonpModule,

            HomeComponent,HeaderComponent,AdminAuthComponent,UserAuthComponent,
            AdminHomeComponent,AdminAddProductComponent,FooterComponent,SearchComponent
             
            ],
            
  providers:[ProductService,AdminService,UserService,HttpClientModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {



  title = 'iNursery';

}