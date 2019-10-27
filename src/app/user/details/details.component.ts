import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/userModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userDetailsForm: FormGroup;
  userModel: User;

  constructor(private fb: FormBuilder) {
    this.userModel = new User('', '', '', '', new Date());
    this.setFormControls();
  }

  ngOnInit() {
    // this.userDetailsForm = this.fb.group(this.userModel);
  }

  submit = () => {
    if (this.userDetailsForm.valid) {
      this.userModel = this.userDetailsForm.value;
      console.log(this.userModel);
    } else {
      this.invalidateForm();
    }
    // service call to store the data
  }

  setFormControls = () => {
    this.userDetailsForm = this.fb.group({
      username: [this.userModel.username, Validators.required],
      email: [this.userModel.email, [Validators.required, Validators.email]],
      password: [this.userModel.password, [Validators.required, Validators.minLength(10)]],
      age: [this.userModel.age, [Validators.required, Validators.min(0), Validators.max(100)]],
      date: [this.userModel.date, [Validators.required]]
    });
  }

  invalidateForm = () => {
    Object.keys(this.userDetailsForm.controls).forEach(field => {
      const control = this.userDetailsForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  // get username() { return this.userDetailsForm.get('username'); }

}
