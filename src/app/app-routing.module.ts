import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo: 'api/v1/products', pathMatch: 'full' },
  // { path: 'detail', component: ProductDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
