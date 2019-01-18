import {Injectable, OnDestroy} from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap';

@Injectable()
export class ModalService implements OnDestroy {
  private activeModal: BsModalRef[] = [];
  private onHideSubscription;

  open(component, modalOptions: ModalOptions) {
    const bsModalRef = this.bsModalService.show(component, modalOptions);
    this.activeModal.push(bsModalRef);
  }

  close() {
    const index = this.activeModal.length - 1;
    const bsModalRef = this.activeModal[index]
    bsModalRef.hide();
    this.activeModal.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.onHideSubscription.unsubscribe();
  }

  constructor(
    private bsModalService: BsModalService
  ) {
    this.onHideSubscription = this.bsModalService.onHide.subscribe((event) => {
      if (event === 'backdrop-click' || event === 'esc') {
        this.activeModal.splice(this.activeModal.length - 1, 1);
      }
    });
  }
}
