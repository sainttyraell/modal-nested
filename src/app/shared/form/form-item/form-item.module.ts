import {NgModule} from '@angular/core';

import {FormItemComponent} from './form-item.component';
import {CommonModule} from '@angular/common';
import {TranslationModule} from '../../translation/translation.module';
import {FormControlErrorModule} from '../form-control-error/form-control-error.module';

@NgModule({
  imports: [CommonModule, TranslationModule, FormControlErrorModule],
  exports: [FormItemComponent],
  declarations: [FormItemComponent],
  providers: [],
})
export class FormItemModule {
}
