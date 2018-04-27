import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ProductsService} from './products.service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
//import { SliderComponent } from './slider/slider.component';
import { AppRoutesModule} from './app-routes/app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    SidebarComponent,
    FooterComponent,
    ProductsComponent,
    AdminComponent,
    //SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
