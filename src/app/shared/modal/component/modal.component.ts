import {ModalService} from '../modal.service';

export abstract class AbstractModalComponent {
  public close() {
    this.modalService.close();
  }

  protected constructor(
    protected modalService: ModalService
  ) {}
}
