import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateProduct} from './create-product.component'
import {RouterModule, Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from './../../../shared.module';

export const CreateProductRoutes : Routes = [{
	path:'',
	component:CreateProduct,
	data:{
		header:'Create Product',
		status:true
	}

}]
@NgModule({
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	SharedModule,
  	RouterModule.forChild(CreateProductRoutes)
  ],
  declarations: [
	CreateProduct
  ]
})
export class CreateProductModule { }
