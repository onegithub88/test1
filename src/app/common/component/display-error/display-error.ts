import {Component, Input, OnInit} from '@angular/core';
@Component({
    selector:'display-error',
    templateUrl:'./display-error.html',
    styleUrls:['./display-error.css']
})

export class DisplayError implements OnInit {
    @Input() errValue:any;
    @Input() errField:string;
    ngOnInit(){
    }
    get errMsg():string {
        if (this.errField=="kode_product" && this.errValue==''){
            return "Kode product tidak boleh kosong";
        }else if (this.errField=="nama_product" && this.errValue==''){
            return "Nama product tidak boleh kosong";
        }else if (this.errField=="satuan" && this.errValue==''){
            return "satuan product tidak boleh kosong";
        }else if (this.errField=="jumlah" && this.errValue==''){
            if (this.errValue==''){
                return "Jumlah product tidak boleh kosong";
            }else if(this.errValue==0) {
                return "Jumlah product harus lebih besar dari nol";
            }
        }else if (this.errField=="harga" && this.errValue==''){
            if (this.errValue==''){
                return "Harga product tidak boleh kosong";
            }else if(this.errValue==0) {
                return "Harga product harus lebih besar dari nol";
            }
        }else{
            return null;
        }
    }
}