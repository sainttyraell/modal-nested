import {Component, Input, OnInit} from '@angular/core';
import {AbstractModalComponent} from '../component/modal.component';
import {ModalService} from '../modal.service';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-confirmation-modal-component',
  templateUrl: 'confirmation-modal.component.html'
})
export class ConfirmationModalComponent extends AbstractModalComponent implements OnInit {
  @Input() title = 'Are you sure?';
  @Input() bodyText = '';
  @Input() footerText = '';

  close() {
    this.modalService.close();
  }

  confirm() {
    alert('confirmed');
    this.close();
  }

  openBasModal() {
    this.modalService.open(ConfirmationModalComponent, {initialState: {title: 'ello', bodyText: 'lorem ipsum', footerText: 'lalalalala'}});
  }

  openConfModal() {
    this.modalService.open(BasicModalComponent, {initialState: {title: 'basic', bodyText: 'basic ipsum'}});
  }

  ngOnInit() {}

  constructor(protected modalService: ModalService) {
    super(modalService);
  }
}
