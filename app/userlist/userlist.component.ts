import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {



  constructor(private service:AuthService,private dialog:MatDialog){
     this.Loaduser();
  }
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  userList:any;
  Loaduser(){
    this.service.getAll().subscribe(res=>{
      this.userList=res;
      this.dataSource=new MatTableDataSource(this.userList);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }
  displayedColumns: string[] = ['username', 'name', 'email','role', 'status','action'];
  dataSource:any;


  UpdateUser(code:any){
      this.dialog.open(UpdatepopupComponent,{
        enterAnimationDuration:'500ms',
        exitAnimationDuration:'500ms',
        width:'30%',
        data:{
          usercode:code
        }
      })
  }
}
