import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductosComponent } from './productos/productos.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { CounterComponent } from './counter/counter.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { SearchPipe } from './search.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { PayoutComponent } from './payout/payout.component';
import { StageAreaComponent } from './stage-area/stage-area.component';
import { LogInComponent } from './log-in/log-in.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HistorialComponent } from './historial/historial.component';
import { OffersComponent } from './offers/offers.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProductosComponent,
    LocationComponent,
    ContactComponent,
    NavBarComponent,
    PaginationComponent,
    ToolBarComponent,
    ProductDetailComponent,
    MiListaComponent,
    InfoProductComponent,
    CounterComponent,
    SearchPipe,
    PayoutComponent,
    StageAreaComponent,
    LogInComponent,
    HistorialComponent,
    OffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    MatChipsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
