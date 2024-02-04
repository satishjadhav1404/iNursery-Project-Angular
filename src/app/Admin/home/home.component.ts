import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../Services/admin.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { cart, product } from '../../data-type';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,HttpClientJsonpModule],
  providers:[AdminService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit  {
 

  popularProducts:undefined|product[];
  trendyProducts:undefined | product[];

   constructor(private product:ProductService) {}
 
   ngOnInit(): void {
     this.product.popularProducts().subscribe((data)=>{
       this.popularProducts=data;
     })
 
     this.product.trendyProducts().subscribe((data)=>{
       this.trendyProducts=data;
     })
   }
  
}
