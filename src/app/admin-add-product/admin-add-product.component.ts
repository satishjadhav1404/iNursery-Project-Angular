import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[ProductService],
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.scss'
})
export class AdminAddProductComponent implements OnInit {
  addProductMessage: string | undefined;

  constructor(private product:ProductService){}
  ngOnInit(): void {
    
  }

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
  }
}
