import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent implements OnInit {
  @Input() formControl: FormControl;
  @Input() errorMessage: string;
  @Input() formSubmitted: boolean = false;

  constructor() { }

  shouldShow() {
    if (this.formControl) {
      return this.formControl.invalid && this.formSubmitted;
    }
  }

  ngOnInit() {}

}
