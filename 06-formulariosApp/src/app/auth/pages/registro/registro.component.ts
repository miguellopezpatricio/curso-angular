import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],    
    passwordConfirma: ['',[Validators.required]],
  },{
    validators:[this.validatorService.camposIguales('password','passwordConfirma')]
  })


  get emailErrorMsg():string {
    
    const errors = this.miFormulario.get('email')?.errors
    if(errors?.['required']){
      return 'Email obligatorio'
    } else if(errors?.['pattern']){
      return 'Email formato no válido'
    } else if(errors?.['emailTomado']){
      return 'Email ya en uso'
    }
    return ''
  }

  constructor(private formBuilder: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService){}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Nuevo Usuario',
      email: 'test1@test.com',
      username:'usuarionuevo',
      password:'123456',
      passwordConfirma: '123456'
        })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }




/*   emailRequired(){
    return this.miFormulario.get('email')?.errors?.['required']
    && this.miFormulario.get('email')?.touched
  }

  emailFormato(){
    return this.miFormulario.get('email')?.errors?.['pattern']
    && this.miFormulario.get('email')?.touched
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors?.['emailTomado']
    && this.miFormulario.get('email')?.touched
  } */
}
