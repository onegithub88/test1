import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

export const ProductModuleRoutes : Routes = [{
	path:'',
	data:{
		status:false
	},
	children:[
		{
			path:'view',
			loadChildren:'./view-list-product/view-list-product.module#ViewListProductModule'
		},
		{
			path:'create',
			loadChildren:'./create-product/create-product.module#CreateProductModule'
		},
		{
			path:'edit/:id',
			loadChildren:'./edit-product/edit-product.module#EditProductModule'
		}
	]
}]

@NgModule({
  imports: [
		CommonModule,
    RouterModule.forChild(ProductModuleRoutes)
  ],
  declarations: []
})
export class ProductModule { }
