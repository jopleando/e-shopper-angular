import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from '../home/home.component';
import { ShopComponent } from '../shop/shop.component';
import { ProductComponent } from '../product/product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { BlogComponent } from '../blog/blog.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop', component: ShopComponent, children: [
      { path: 'products', component: ProductComponent },
      { path: 'products-details', component: ProductDetailsComponent }
    ]
  },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
    enableTracing: false
  })
  ],
  exports: [RouterModule],
  declarations: []

})
export class RoutesModule { }
