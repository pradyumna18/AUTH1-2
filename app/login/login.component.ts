import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router) {
    sessionStorage.clear();
   }


  userdata: any;
  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });


  //simple login method
  // login() {
  //   if (this.loginForm.valid) {
  //     this.service.getByCode(this.loginForm.value.username).subscribe(res => {
  //       this.userdata = res;
  //       console.log(this.userdata);
  //       if (this.userdata.pas === this.loginForm.value.password) {
  //         alert('Login Successfully Done...');
  //         this.router.navigate(['user']);
  //       } else {
  //         this.toastr.error('Invalid User...?');
  //       }
  //     });
  //   }
  // }

    login(){
      if(this.loginForm.valid){
        this.service.getByCode(this.loginForm.value.username).subscribe(res=>{
          this.userdata=res;
          console.log(this.userdata);
          if(this.userdata.pas===this.loginForm.value.password){
               if(this.userdata.isactive){
                sessionStorage.setItem('username',this.userdata.id);
                sessionStorage.setItem('userrole',this.userdata.role);
                this.router.navigate(['user']);
               }else{
                this.toastr.error('Please Contact To Admin','Invalid User...?');
               }
          }else{
            this.toastr.error('Please Contact To Admin','Invalid User...?');
          }
        });
    }
  }
}