import {DisplayError} from './common/component/display-error/display-error';
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';  

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ], 
  declarations: [
    DisplayError
  ],
  exports: [
    DisplayError
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
