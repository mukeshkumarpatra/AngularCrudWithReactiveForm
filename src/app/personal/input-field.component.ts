import { Component, OnInit ,Output, Input, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataService } from './data.service';
import { User } from './user';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  submitted = false;
  user: User;

 @Output() someEvent = new EventEmitter();

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z]+@gmail.com")
    ]),
    age: new FormControl('', [
      Validators.required
    ]),
    location: new FormControl('', [
      Validators.required
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    aadhar: new FormControl('', [
      Validators.required,
      Validators.minLength(12),

    ]),
    pan: new FormControl('', [
      Validators.required,
      Validators.minLength(10),

    ]),
  });
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get age() {
    return this.form.get('age');
  }
  get location() {
    return this.form.get('location');
  }
  get gender() {
    return this.form.get('gender');
  }

  get aadhar() {
    return this.form.get('aadhar');
  }

  get pan() {
    return this.form.get('pan');
  }


  isFormValid(isCheck) {
    if (isCheck.target.checked) {
      this.form.get('name').setValidators([]); // or clearValidators()
      this.form.get('name').updateValueAndValidity();

      this.form.get('email').setValidators([]);
      this.form.get('email').updateValueAndValidity();

      this.form.get('age').setValidators([]);
      this.form.get('age').updateValueAndValidity();

      this.form.get('location').setValidators([]);
      this.form.get('location').updateValueAndValidity();

      this.form.get('gender').setValidators([]);
      this.form.get('gender').updateValueAndValidity();

      this.form.get('aadhar').setValidators([]);
      this.form.get('aadhar').updateValueAndValidity();

      this.form.get('pan').setValidators([]);
      this.form.get('pan').updateValueAndValidity();


    }
    else {
      this.form.get('name').setValidators([
        Validators.required,
        Validators.minLength(4)
      ]); // or clearValidators()
      this.form.get('name').updateValueAndValidity();

      this.form.get('email').setValidators([
        Validators.required,
        Validators.pattern("^[a-z]+@gmail.com")
      ]);
      this.form.get('email').updateValueAndValidity();


      this.form.get('age').setValidators([
        Validators.required
      ]);
      this.form.get('age').updateValueAndValidity();

      this.form.get('location').setValidators([
        Validators.required
      ]);
      this.form.get('location').updateValueAndValidity();

      this.form.get('gender').setValidators([
        Validators.required
      ]);
      this.form.get('gender').updateValueAndValidity();

      this.form.get('aadhar').setValidators([
        Validators.required,
        Validators.minLength(12),
      ]);
      this.form.get('aadhar').updateValueAndValidity();

      this.form.get('pan').setValidators([
        Validators.required,
        Validators.minLength(10),
      ]);
      this.form.get('pan').updateValueAndValidity();

    }
  }



  constructor(public dataservice: DataService) { }

  ngOnInit() {

  }

  onSubmit(e) {
    this.user = this.form.value;
    this.dataservice.postEmployee(this.user).subscribe(
      (data: User) => {
         this.someEvent.emit(data);
         this.form.reset();
      },
      (error: any) => console.log(error)
    );
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }
  initializeFormGroup() {
    this.form.setValue({
      $id: null,
      name: '',
      email: '',
      age: null,
      location: '',
      gender: '',
      aadhar:null,
      pan: '',
     
    });
  }
}