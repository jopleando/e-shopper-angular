import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	products:any;
	date= new Date()

   constructor( private productsService: ProductsService) { 
  		productsService.getNews().subscribe(
  			data => {
  				this.products=data
  			}
  		)
  }

  ngOnInit() {
  }

}