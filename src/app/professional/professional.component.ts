import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProfessionalService } from '../professional/professional.service';
import { Users } from '../professional/user';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  
  users: Users;
  
  checks = [
    { description: 'BE', value: 'value1' },
    { description: "ME", value: 'value2' },
    { description: "MBA", value: 'value3' }
  ];

  expert = [
    { id: 1, name: 'java' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'NodeJs' },
    { id: 4, name: 'ReactJs' }
  ]

  form = new FormGroup({
    qualification: new FormControl('', [
      Validators.required
    ]),
    university: new FormControl('', [
      Validators.required
    ]),
    about: new FormControl('', [
      Validators.required
    ]),
    expertise: new FormControl('', [
      Validators.required
    ]),
  })

  get qualification() {
    return this.form.get('qualification');
  }
  get university() {
    return this.form.get('university');
  }
  get about() {
    return this.form.get('about');
  }
  get expertise() {
    return this.form.get('expertise');
  }
  constructor(public prfservice: ProfessionalService) { }

  onSubmit(e): void {
    this.users = this.form.value;
    this.prfservice.postEmployee(this.users).subscribe(
      (data: Users) => {
        console.log(data);
        this.form.reset();
      },
      (error: any) => console.log(error)
    );
  }
  ngOnInit() {
  }
  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }
  initializeFormGroup() {
    this.form.setValue({
      $id: null,
      qualification: '',
      university: '',
      about: '',
      expertise: '',
      
     
    });
  }
}