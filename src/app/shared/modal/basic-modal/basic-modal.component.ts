import {Component, Input, TemplateRef} from '@angular/core';
import {AbstractModalComponent} from '../component/modal.component';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html'
})
export class BasicModalComponent extends AbstractModalComponent {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;

  @Input() title = 'modal.header.title';
  @Input() bodyText = 'basic modal body text';
  @Input() footerText = 'basic modal footer text';

  close() {
    this.modalService.close();
  }

  constructor(protected modalService: ModalService) {
    super(modalService);
  }
}
