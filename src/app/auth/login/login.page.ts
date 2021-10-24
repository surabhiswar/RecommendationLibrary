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

    email:string = ''
    password:string = ''

    async onSubmit(){
        let data:any = JSON.parse(localStorage.getItem("user_list"))
        if(data){
            data.filter(x => {
                if(x.email === this.email && x.password === this.password){
                    localStorage.setItem("get_loggedin_user",JSON.stringify(x))
                    this.router.navigate(['home'])
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        text: 'Incorrect Email or Password',
                    })
                }
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                text: 'User is not Registered',
            })
            this.email = ''
            this.password = ''
        }
    }
}   
