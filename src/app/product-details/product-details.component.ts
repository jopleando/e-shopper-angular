import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products = null;
  constructor(private productsService: ProductsService,
  						private route: ActivatedRoute,
  						private router: Router){
  	let id = route.snapshot.params['id']
  	this.products = productsService.getAll().subscribe(
  		data => { 
        this.products.filter( (item) => {return item.id == id})[0] || null  

  	});
  	if(this.products === null) router.navigate(['404']);
 }
  ngOnInit() {
  }

}
