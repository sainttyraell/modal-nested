import {Component, OnInit} from '@angular/core';
import {FormItemComponent} from '../form-item/form-item.component';

@Component({
  selector: 'app-form-item-input',
  templateUrl: 'form-item-input.component.html'
})

export class FormItemInputComponent extends FormItemComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
