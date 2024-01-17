import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {
  constructor(private builder:FormBuilder,private service:AuthService){}
  ngOnInit(): void {
    this.service.GetAllRole().subscribe(res=>{
       this.rolelist=res
    })
  }
  rolelist:any;
  registerForm=this.builder.group({
    id:this.builder.control(''),
    name:this.builder.control(''),
    pas:this.builder.control(''),
    email:this.builder.control(''),
    gen:this.builder.control('male'),
    role:this.builder.control('',Validators.required),
    isactive:this.builder.control(false),
  });


  Updateuser(){

  }

}
