import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plants',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  providers:[ProductService],
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent {
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
