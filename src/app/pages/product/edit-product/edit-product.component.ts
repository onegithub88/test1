import {Component, OnInit} from '@angular/core';
import {ServiceProduct} from '../../../services/service-product';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'edit-product',
    templateUrl: 'edit-product.component.html',
    styleUrls: ['edit-product.component.css']
})
export class EditProduct implements OnInit {
    constructor(
        public service : ServiceProduct,
        public router: Router,
        public route: ActivatedRoute
    ) {
    }
    dataEditProduct :any = {};
    disableKodeProduct: boolean = true;
    Productid :any = '';
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.Productid = +params['id'];
            this.handleGetDataProduct(this.Productid);
        });
    }   
    handleGetDataProduct(id){
        var params = `?id=${id}`;
        this.service.getDataParams(params).subscribe((data)=>{
            this.dataEditProduct = data.data[0];
        });
    }
    handleEditProduct(){
        var tempContinue = true;
        if (this.dataEditProduct.id==undefined || this.dataEditProduct.kode_product==''){
            tempContinue = false;
        }
        if (this.dataEditProduct.kode_product==undefined || this.dataEditProduct.kode_product==''){
            this.dataEditProduct.kode_product='';
            tempContinue = false;
        }
        if (this.dataEditProduct.nama_product==undefined || this.dataEditProduct.nama_product==''){
            this.dataEditProduct.nama_product='';
            tempContinue = false;
        }
        if (this.dataEditProduct.satuan==undefined || this.dataEditProduct.satuan==''){
            this.dataEditProduct.satuan='';
            tempContinue = false;
        }
        if (this.dataEditProduct.jumlah==undefined || this.dataEditProduct.jumlah==''){
            this.dataEditProduct.jumlah=0;
            tempContinue = false;
        }
        if (this.dataEditProduct.harga==undefined || this.dataEditProduct.harga==''){
            this.dataEditProduct.harga=0;
            tempContinue = false;
        }
        if (tempContinue){
            this.service.updateData(this.dataEditProduct).subscribe((data)=>{
                if (data.status==200){
                    this.router.navigateByUrl('/product/view');
                } else {
                }
            });
        }
    }
    handleGoBack(){
        this.router.navigateByUrl('/product/view');
    }
    
}
