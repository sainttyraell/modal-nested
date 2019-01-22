import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: 'form-item.component.html',
  styleUrls: ['form-item.component.scss']
})
export class FormItemComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public formGroup: FormGroup;
  @Input() public controlName: string;
  @Input() public label: string;
  @Input() public error: boolean = false;
  @Input() public formSubmitted: boolean = false;
  @Input() public errorMessage: string;

  private _disabled: boolean;

  ngOnInit() {
    this.control = <FormControl>this.formGroup.controls[this.controlName];
    this.applyDisabled();
  }

  private applyDisabled() {
    if (this.control) {
      if (this._disabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }
  }

  constructor() {}
}
