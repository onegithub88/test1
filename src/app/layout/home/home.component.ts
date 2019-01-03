import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(public router:Router, public Route:ActivatedRoute) {
    }
    ngOnInit() {
      this.router.navigateByUrl('/product/create');
    }
    showSidebar : boolean = false;
    handleHideDasboard(active){
      if (active){
        document.querySelector('#'+"sidebar").classList.add('active');
        document.querySelector('.'+'icon-text').classList.add('show-icontext');
        document.querySelector('.'+'icon-show').classList.add('hiden-icon');
        document.querySelector('.'+'table-icon').classList.add('hiden-icontable');
        document.querySelector('.'+'grafik-icon').classList.add('hiden-icongrafik');
        document.querySelector('.'+'table-text').classList.add('show-text');
        document.querySelector('.'+'grafik-text').classList.add('show-grafiktext');
        this.showSidebar = active;
      }else {
        document.querySelector('#'+"sidebar").classList.remove('active');
        document.querySelector('.'+'icon-text').classList.remove('show-icontext');
        document.querySelector('.'+'icon-show').classList.remove('hiden-icon');
        document.querySelector('.'+'table-icon').classList.remove('hiden-icontable');
        document.querySelector('.'+'grafik-icon').classList.remove('hiden-icongrafik');
        document.querySelector('.'+'table-text').classList.remove('show-text');
        document.querySelector('.'+'grafik-text').classList.remove('show-grafiktext');
        this.showSidebar = active;
      }
    }
    handleGotoListProduct(){
      this.router.navigateByUrl('/product/view');
    }
    handleGotoAddProduct(){
      this.router.navigateByUrl('/product/create');
    }
}
