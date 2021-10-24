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

    registerForm = new FormGroup({
        user_name: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })

    get user_name(){
        return this.registerForm.get('user_name')
    }

    get email(){
        return this.registerForm.get('email')
    }

    get password(){
        return this.registerForm.get('password')
    }

    async onSubmit(){
        try{
            // this.authService.saveUser(this.registerForm.value).subscribe((response)=>{
            //     console.log(response)
            //     try{
            //         Swal.fire({
            //             icon: 'success',
            //             text: 'User Saved Successfully',
            //         })
            //         setTimeout(() => {
            //             this.router.navigate([''])
            //         }, 2000);
            //     }
            //     catch(error){
            //         Swal.fire({
            //             icon: 'error',
            //             text: 'User Registration Failed',
            //         })
            //     }
            // })
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                text: 'User Registration Failed',
            })
        }
    }

}