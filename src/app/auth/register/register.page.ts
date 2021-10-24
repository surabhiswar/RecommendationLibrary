import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RegisterService } from './../../auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss','./register.page.css'],
})
export class RegisterPage implements OnInit {

    constructor(private  authService:  RegisterService, private  router:  Router) { }

    ngOnInit() {
    }

    user_name:string = ''
    email:string = ''
    password:string = ''

    async onSubmit(){
        let data:any = [{
            user_name: this.user_name,
            email: this.email,
            password: this.password
        }]
        localStorage.setItem("user_list",JSON.stringify(data))
        Swal.fire({
            icon: 'success',
            text: 'User Registered Successfully',
        }).then((result) => {
            if(result){
                this.router.navigate([''])
            }
        }) 
    }    
}