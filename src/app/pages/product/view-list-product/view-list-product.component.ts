import {Component, OnInit} from '@angular/core';
import {ServiceProduct} from '../../../services/service-product';
import {Router} from '@angular/router';
@Component({
    selector: 'view-list-product',
    templateUrl: 'view-list-product.component.html',
    styleUrls: ['view-list-product.component.css']
})
export class ViewListProduct implements OnInit {
    constructor(
        public service : ServiceProduct,
        public router : Router
    ) {
    }
    public pages: number = 1; //page
    public limit: number = 5; //itemsPerPage
    public totalItems: number; //elements
    public previousPage: any = 0;
    public showCount: number;
    
    ngOnInit() {
        this.handleGetDataProduct();
    }
    // data product
    dataProduct : any =[];
    dataProductLoad : any =[];
    loadPage(page: number) {
        this.previousPage = page;
        this.dataProduct = this.dataProductLoad.slice(((page-1)*this.limit),(page*this.limit));
        this.dataProduct.slice();
    }
    handleGetDataProduct(){
        this.service.getData().subscribe((data)=>{
            this.dataProductLoad = data.data;
            this.dataProduct     = this.dataProductLoad.slice(((this.pages-1)*this.limit),(this.pages*this.limit))
            this.totalItems      = data.data ? data.data.length : '';
            this.showCount       = this.totalItems < this.limit ? this.totalItems : this.limit;
        });
    }
    handleDeleteProduct(id){
        var productId = {id:id}
        this.service.deleteData(productId).subscribe(data=>{
            if (data.status==200){
                this.handleGetDataProduct();
            }
        })
    }
    handleEditProduct(id){
        this.router.navigateByUrl(`/product/edit/${id}`);
    }
    
    handleGoToAddProduct(){
        this.router.navigateByUrl('/product/create');
    }
}
