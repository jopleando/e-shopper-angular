import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

	products = [
	{id:1, url:'',price:'$56',	title: 'Easy Polo Black Edition', description: "Es un producto alal"},
	{id:2, url: '',price:'$58', title: 'Easy Polo Black Edition', description: "Es un producto alal"},
	{id:3, url: '',price:'$70' ,title: 'Easy Polo Black Edition', description: "Es un producto alal"},
	{id:4, url: '',price:'$28', title: 'Easy Polo Black Edition', description: "Es un producto alal"},
	{id:5, url: '',price:'$58' ,title: 'Easy Polo Black Edition', description: "Es un producto alal"},
	{id:6, url: '',price:'$96' , title: 'Easy Polo Black Edition', description: "Es un producto alal"},
	
	]
  constructor() { }

  getNews(){
  	return this.products;
  }

 searchNews(id){
  	
  	return this.products.filter((item)=> {return item.id==id}) [0] || null
  }

}
