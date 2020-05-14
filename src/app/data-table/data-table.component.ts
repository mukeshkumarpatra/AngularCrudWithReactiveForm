import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { DataService } from '../personal/data.service';
import { ProfessionalService } from '../professional/professional.service';
import { MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { User } from '../personal/user';
import { Users } from '../professional/user';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  listData:any;
  user: User;
  users: Users;
  tableData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'email', 'age', 'location', 'gender', 'aadhar', 'pan', 'qualification', 'university', 'about', 'expertise', 'actions'];
  valueArray: any = [];
  
  @Input() someData: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private dataservice: DataService,
    private prfservice: ProfessionalService) {

  }

 
  

  ngOnInit() {
    
    this.dataservice.getData().subscribe(
      listData =>
       (listData) = this.user = listData,
      (err) => console.log(err)
    );
    this.tableData = new MatTableDataSource(this.listData);
    this.tableData.sort = this.sort;
    this.tableData.paginator = this.paginator;

    this.prfservice.getData().subscribe(
      (listData) => this.users = listData,
      (err) => console.log(err)
    );
    
  }

  // ngOnChanges(change: SimpleChanges) {
  //   this.users = this.someData
  //   this.user = this.someData;
  //   console.log(this.users);
  // }

}
