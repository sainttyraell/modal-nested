import { NgModule } from '@angular/core';

import { ModalService } from './modal.service';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import {CommonModule} from '@angular/common';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';
import {TranslationModule} from '../translation/translation.module';


@NgModule({
  imports: [CommonModule, TranslationModule],
  exports: [BasicModalComponent],
  declarations: [BasicModalComponent, ConfirmationModalComponent],
  providers: [ModalService],
  entryComponents: [BasicModalComponent, ConfirmationModalComponent]
})
export class ModalModule {}
