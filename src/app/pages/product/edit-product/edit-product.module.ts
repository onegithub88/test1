import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditProduct} from './edit-product.component'
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SharedModule} from './../../../shared.module';

export const EditProductRoutes : Routes = [{
	path:'',
	component:EditProduct,
	data:{
		header:'Edit Product',
		status:true
	}

}]
@NgModule({
  imports: [
		CommonModule,
		FormsModule,
		SharedModule,
  	RouterModule.forChild(EditProductRoutes)
  ],
  declarations: [
		EditProduct
  ]
})
export class EditProductModule { }
