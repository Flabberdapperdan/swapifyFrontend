import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    street: ['', Validators.required],
    houseNumber: [null, Validators.required],
    extension: [''],
    postalCode: ['', Validators.required],
    city: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    sizeId: [null, Validators.required],
    genderId: [null, Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    let newUser = new User();
    newUser.firstName = this.firstFormGroup.controls.firstName.value;
    newUser.lastName = this.firstFormGroup.controls.lastName.value;
    newUser.phone = this.firstFormGroup.controls.phone.value;
    newUser.email = this.firstFormGroup.controls.email.value;
    newUser.street = this.secondFormGroup.controls.street.value;
    newUser.houseNumber = this.secondFormGroup.controls.houseNumber.value;
    newUser.extension = this.secondFormGroup.controls.extension.value;
    newUser.postalCode = this.secondFormGroup.controls.postalCode.value;
    newUser.city = this.secondFormGroup.controls.city.value;
    newUser.sizeId = this.thirdFormGroup.controls.sizeId.value;
    newUser.genderId = this.thirdFormGroup.controls.genderId.value;
  }
}
