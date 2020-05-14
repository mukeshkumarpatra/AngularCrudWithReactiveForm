import { Component, OnInit } from '@angular/core';
import { DataService } from './personal/data.service';
import { ProfessionalService } from './professional/professional.service';
import { User } from './personal/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  somedata:any;
  
  constructor(private dataservice: DataService,
    private prfservice: ProfessionalService) { }



  ngOnInit() { 
  }
  
  myfn(e){
console.log(e);
this.somedata= e;
  }

}

