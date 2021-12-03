import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: UserServiceService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('########Inside the user-details, ID is::'+this.getId);
    
    this.crudService.GetUser(this.getId).subscribe(res => {
      console.log('########Inside the user-details, res is::'+JSON.stringify(res.data.name));
      this.updateForm.setValue({  
        name: res.data.name,
        email: res.data.email,
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
    })
  }
  ngOnInit() { }
  onUpdate(): any {
    this.crudService.updateUser(this.getId, this.updateForm.value)
    .subscribe(() => {
       alert('User updated successfully!')
       // this.ngZone.run(() => this.router.navigateByUrl('/users-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
