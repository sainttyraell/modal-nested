import {Component, OnInit} from '@angular/core';
import {ModalService} from './shared/modal/modal.service';
import {ConfirmationModalComponent} from './shared/modal/confirmation-modal/confirmation-modal.component';
import {BasicModalComponent} from './shared/modal/basic-modal/basic-modal.component';
import {ModalOptions} from 'ngx-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'global.welcome';
  form: FormGroup;

  openModalWithComponent() {
    const modalOptions: ModalOptions = {
      initialState: {
        title: 'basic title',
        bodyText: 'conf modal message',
        footerText: 'conf modal footer'
      },
      backdrop: 'static'
    };
    this.modalService.open(ConfirmationModalComponent, modalOptions);
  }

  submit() {
    console.log(this.form);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('')
    });
  }

  constructor(
    private modalService: ModalService
  ) {}
}
