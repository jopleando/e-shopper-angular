import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products = null;
  constructor(private productsService: ProductsService) {
    productsService.getAll().subscribe(
      data => {
        this.products = data;
        console.log(this.products)
      } 
    )
   }

  ngOnInit() {
  }

}
