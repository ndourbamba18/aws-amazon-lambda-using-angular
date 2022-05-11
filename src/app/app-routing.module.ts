import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';
import { DetailProductComponent } from './components/product/detail-product/detail-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'all-products', pathMatch: 'full'},
  {path: 'all-products', component: AllProductsComponent},
  {path: 'detail-product/:id', component: DetailProductComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
