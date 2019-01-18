import { NgModule } from '@angular/core';

import { ModalModule as NgxModal } from 'ngx-bootstrap/modal';

import { ModalService } from './modal.service';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import {CommonModule} from '@angular/common';
import {ConfirmationModalComponent} from './confirmation-modal/confirmation-modal.component';


@NgModule({
  imports: [CommonModule],
  exports: [BasicModalComponent],
  declarations: [BasicModalComponent, ConfirmationModalComponent],
  providers: [ModalService],
  entryComponents: [BasicModalComponent, ConfirmationModalComponent]
})
export class ModalModule {}
