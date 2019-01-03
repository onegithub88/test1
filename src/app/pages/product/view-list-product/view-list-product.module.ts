import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ViewListProduct} from './view-list-product.component'
import {RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const ViewListProductRoutes : Routes = [{
	path:'',
	component:ViewListProduct,
	data:{
		header:'Product View',
		status:true
	}

}]
@NgModule({
  imports: [
		CommonModule,
		NgbModule,
  	RouterModule.forChild(ViewListProductRoutes)
  ],
  declarations: [ViewListProduct]
})
export class ViewListProductModule { }
