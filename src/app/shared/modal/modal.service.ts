import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';

@Injectable()
export class ModalService {
  private activeModal: BsModalRef[] = [];

  open(component, modalOptions: ModalOptions) {
    const bsModalRef = this.bsModalService.show(component, modalOptions);
    this.activeModal.push(bsModalRef);
    console.log(bsModalRef);
    console.log(this.activeModal);
  }

  close() {
    const index = this.activeModal.length - 1;
    const bsModalRef = this.activeModal[index]
    bsModalRef.hide();
    this.activeModal.splice(index, 1);
  }

  constructor(
    private bsModalService: BsModalService
  ) {}
}
