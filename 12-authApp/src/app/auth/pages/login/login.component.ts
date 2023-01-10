import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email:['mi@correo.com', [Validators.required, Validators.email]], 
    password:['123456', [Validators.required, Validators.minLength(6)]] 
  })

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService){}

  login(){


    console.log(this.miFormulario.value)
    console.log(this.miFormulario.valid)

    const {email, password} = this.miFormulario.value

    this.authService.login(email, password)
      .subscribe(ok => {

        if(ok === true){

          this.router.navigateByUrl('/dashboard')

        } else {
          Swal.fire('Error',ok, 'error')
        }      

      })
    
  }
}
