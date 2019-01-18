import { Component } from '@angular/core';
import {ModalService} from './shared/modal/modal.service';
import {ConfirmationModalComponent} from './shared/modal/confirmation-modal/confirmation-modal.component';
import {BasicModalComponent} from './shared/modal/basic-modal/basic-modal.component';
import {ModalOptions} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'global.welcome';

  openModalWithComponent() {
    const modalOptions: ModalOptions = {
      initialState: {
        title: 'basic title',
        message: 'basic message',
        footerText: 'conf modal footer'
      },
      backdrop: 'static'
    };
    this.modalService.open(ConfirmationModalComponent, modalOptions);
  }

  constructor(
    private modalService: ModalService
  ) {}
}
