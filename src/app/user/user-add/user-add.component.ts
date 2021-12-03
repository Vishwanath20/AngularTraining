import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.sass']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: UserServiceService
  ) { 
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
    })
  }

  ngOnInit() { }
  
  onSubmit(): any {
    console.log("this.userForm.value"+JSON.stringify(this.userForm.value));
    this.crudService.AddUser(this.userForm.value)
    .subscribe(() => {
        console.log('User added successfully!')
      //  this.ngZone.run(() => this.router.navigateByUrl('/users-list'))
      }, (err) => {
        console.log(err);
    });
  }


}
