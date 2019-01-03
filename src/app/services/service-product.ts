import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {ServiceConfig} from './service-config';
@Injectable()
export class ServiceProduct {
    constructor(private http:Http){}
    getData(){
        return this.http.get(ServiceConfig.BASE_SERVER+ServiceConfig.GET_PRODUCT)
        .map(response=>response.json());
    }
    getDataParams(params){
        return this.http.get(ServiceConfig.BASE_SERVER+ServiceConfig.GET_PRODUCT_DETAIL+params)
        .map(response=>response.json());
    }
    postData(data){
        return this.http.post(ServiceConfig.BASE_SERVER+ServiceConfig.CREATE_PRODUCT,data)
        .map(response=>response.json());
    }
    updateData(data){
        return this.http.put(ServiceConfig.BASE_SERVER+ServiceConfig.UPDATE_PRODUCT,data)
        .map(response=>response.json());
    }
    deleteData(params){
        return this.http.post(ServiceConfig.BASE_SERVER+ServiceConfig.DELETE_PRODUCT,params)
        .map(response=>response.json());
    }
}