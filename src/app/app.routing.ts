import {Routes} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';

export const AppRoutes : Routes = [{
	path:'',
	component:HomeComponent,
	children:[{
		path:'product',
		loadChildren:'./pages/product/product.module#ProductModule'
	}]
}]