import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  providers:[ProductService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  
  searchResult:undefined|product[]

  constructor(private activeRoute: ActivatedRoute, private product:ProductService) { }

 
  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.searchResult=result;
      
    })
  }
  
  
}
