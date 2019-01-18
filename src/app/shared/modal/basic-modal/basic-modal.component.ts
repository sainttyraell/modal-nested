import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html'
})
export class BasicModalComponent {
  @Input() title = '';
  @Input() message = '';
  @Input() footerText = 'sample footer text';

  @Output() public close: EventEmitter<void> = new EventEmitter<void>();

  onClose(event: any) {
    this.close.emit();
  }

  constructor() {}
}
