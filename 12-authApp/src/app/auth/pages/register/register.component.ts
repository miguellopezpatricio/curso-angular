import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {


  miFormulario: FormGroup = this.fb.group({
    name:['Mi Nombre'],
    email:['mi@correo.com', [Validators.required]], 
    password:['', [Validators.required, Validators.minLength(6)]] 
  })

  constructor(private fb: FormBuilder, private router: Router){}

  register(){
    console.log(this.miFormulario.value)
    console.log(this.miFormulario.valid)

    this.router.navigateByUrl('/dashboard')
  }

}
