import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorComponent } from './form-control-error.component';
import {TranslationModule} from '../../translation/translation.module';

@NgModule({
  declarations: [FormControlErrorComponent],
  imports: [
    CommonModule, TranslationModule
  ],
  exports: [FormControlErrorComponent]
})
export class FormControlErrorModule { }
