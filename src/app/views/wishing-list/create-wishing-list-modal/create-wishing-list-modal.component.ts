import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-wishing-list-modal',
  templateUrl: './create-wishing-list-modal.component.html',
  styleUrls: ['./create-wishing-list-modal.component.scss']
})
export class CreateWishingListModalComponent {
  public addressForm: FormGroup = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
