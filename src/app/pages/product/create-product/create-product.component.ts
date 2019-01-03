import {Component, OnInit} from '@angular/core';
import {ServiceProduct} from '../../../services/service-product';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
    selector: 'create-product',
    templateUrl: 'create-product.component.html',
    styleUrls: ['create-product.component.css']
})
export class CreateProduct implements OnInit {
    constructor(
        public service : ServiceProduct,
        public router: Router,
        public fb: FormBuilder
    ) {
    }
    dataProduct :any = {};
    showError :boolean = false;
    user:FormGroup;
    ngOnInit() {
        this.user = this.fb.group({
            name  :['',[Validators.required,Validators.minLength(2)]],
            account:this.fb.group({
                email:["",[Validators.required]],
                address:["",[Validators.required]]
            })
        });
    }
    onSubmit(){
        console.log(this.user.value, this.user.valid,this.user.invalid);
    }
    handleSubmitProduct(){
        var tempContinue = true;
        if (this.dataProduct.kode_product==undefined || this.dataProduct.kode_product==''){
            this.dataProduct.kode_product='';
            tempContinue = false;
        }
        if (this.dataProduct.nama_product==undefined || this.dataProduct.nama_product==''){
            this.dataProduct.nama_product='';
            tempContinue = false;
        }
        if (this.dataProduct.satuan==undefined || this.dataProduct.satuan==''){
            this.dataProduct.satuan='';
            tempContinue = false;
        }
        if (this.dataProduct.jumlah==undefined || this.dataProduct.jumlah==''){
            this.dataProduct.jumlah=0;
            tempContinue = false;
        }
        if (this.dataProduct.harga==undefined || this.dataProduct.harga==''){
            this.dataProduct.harga=0;
            tempContinue = false;
        }
        if (tempContinue){
            this.service.postData(this.dataProduct).subscribe((data)=>{
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
