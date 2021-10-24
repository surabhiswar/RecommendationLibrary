import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { RegisterService } from './../../auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  RegisterService, private  router:  Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get email(){
      return this.loginForm.get('email')
  }

  get password(){
      return this.loginForm.get('password')
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
                    this.router.navigate(['home'])
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
            text: 'User Login Failed',
        })
    }
}

}
