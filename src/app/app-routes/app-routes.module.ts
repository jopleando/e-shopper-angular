import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
//import { SliderComponent } from '../slider/slider.component';
import { ContactComponent } from '../contact/contact.component';
import { AdminComponent } from '../admin/admin.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductsComponent } from '../products/products.component';
import { Routes, RouterModule} from '@angular/router';


const appRoutes : Routes = [
{path:'', component: HomeComponent},
{path:'products', component: ProductsComponent},
{path:'contact', component: ContactComponent},
{path:'admin', component: AdminComponent},
{path:'**', component: PageNotFoundComponent}


]


@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(appRoutes, {
    	enableTracing:true
    })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }
