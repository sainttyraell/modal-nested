import {NgModule} from '@angular/core';

import {FormItemInputComponent} from './form-item-input.component';
import {CommonModule} from '@angular/common';
import {FormItemModule} from '../form-item/form-item.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormControlErrorModule} from '../form-control-error/form-control-error.module';

@NgModule({
  imports: [CommonModule, FormItemModule, ReactiveFormsModule, FormControlErrorModule],
  exports: [FormItemInputComponent],
  declarations: [FormItemInputComponent],
  providers: [],
})
export class FormItemInputModule {
}
