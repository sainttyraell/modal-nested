import {Component, Input, OnInit} from '@angular/core';
import {AbstractModalComponent} from '../component/modal.component';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-confirmation-modal-component',
  templateUrl: 'confirmation-modal.component.html'
})
export class ConfirmationModalComponent extends AbstractModalComponent implements OnInit {
  @Input() title = 'Are you sure?';
  @Input() content = '';
  @Input() footerText = '';

  close() {
    this.modalService.close();
  }

  confirm() {
    console.log('confirmed');
  }

  openBasModal() {
    this.modalService.open(ConfirmationModalComponent, {initialState: {title: 'ello', content: 'lorem ipsum'}});
  }

  ngOnInit() {}

  constructor(protected modalService: ModalService) {
    super(modalService);
  }
}
