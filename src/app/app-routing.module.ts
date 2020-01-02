import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutsModule } from './shared/layouts';
import { CommonLayoutComponent } from './shared/layouts/common-layout';
import { DashboardComponent } from './pages/dashboard';
import { FormsComponent } from './pages/forms';
import {ProductsComponent} from './pages/products';
import {CreateProductComponent} from './pages/products/productcreate';
import { UpdateProductComponent } from './pages/products/productupdate';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
        { path: 'app', component: CommonLayoutComponent, children: [
            { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
            { path: 'products', component: ProductsComponent, pathMatch: 'full' },
            { path: 'productcreate', component: CreateProductComponent, pathMatch: 'full' },
            { path: 'productupdate/:id', component: UpdateProductComponent, pathMatch: 'full' },
            { path: 'account', component: FormsComponent, pathMatch: 'full' },

            { path: '**', redirectTo: '/authpages/404' },
        ] },
      ],
      { useHash: true },
    ),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
