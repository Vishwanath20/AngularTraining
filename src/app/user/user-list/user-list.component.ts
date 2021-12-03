import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  Users:any = [];
  constructor(private crudService: UserServiceService) { }
  ngOnInit(): void {
    this.crudService.GetUsers().subscribe((res:any) => {
      console.log(res)
      this.Users =res.data;
    });    
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteUser(id).subscribe((res) => {
        this.Users.splice(i, 1);
        alert('User Deleted Successfully!!!')
      })
    }
  }

}
