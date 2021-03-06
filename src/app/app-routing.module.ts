import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactComponent } from './contact/contact.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { LocationComponent } from './location/location.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PayoutComponent } from './payout/payout.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { StageAreaComponent } from './stage-area/stage-area.component';
import { LogInComponent } from './log-in/log-in.component';
import { HistorialComponent } from './historial/historial.component';
import { OffersComponent } from './offers/offers.component';


//Array de rutas validado
const routes: Routes = [
  {path:"about",component:AboutUsComponent},
  {path:"products",component:ProductosComponent},
  {path:"contact",component:ContactComponent},
  {path:"location",component:LocationComponent},
  {path:"stage",component:StageAreaComponent},
  {path:"offers",component:OffersComponent},
  {path:"historial",component:HistorialComponent},
  {path:"login",component:LogInComponent},
  {path:"payout/:lista",component:PayoutComponent,
  children:[
    {
      path: 'milista', // child route path
      component: MiListaComponent, // child route component that the router renders
    },
  ]},
  {path:"details/:nombre",component:ProductDetailComponent,
  children:[
    {path:"info",component:InfoProductComponent},
  ]
  },
  {path:'', redirectTo: '/products',pathMatch:'full'},
  {path:"**",component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
