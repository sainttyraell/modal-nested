import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule} from './shared/modal/modal.module';
import { ModalModule as NgxModal } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslationModule } from './shared/translation/translation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxModal.forRoot(),
    TranslationModule.forRoot(),
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
