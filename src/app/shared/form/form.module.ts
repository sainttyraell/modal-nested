import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormItemModule} from './form-item/form-item.module';
import {FormItemInputModule} from './form-item-input/form-item-input.module';
import {FormControlErrorModule} from './form-control-error/form-control-error.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormItemModule,
    FormItemInputModule,
    FormControlErrorModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    FormItemModule,
    FormItemInputModule,
    FormControlErrorModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [],
})
export class AppFormModule {}
