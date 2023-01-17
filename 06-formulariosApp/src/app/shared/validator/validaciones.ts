import { FormControl } from "@angular/forms";

  export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  export const noPuedeSerStrider = (control: FormControl) => {
    const valor:string = control.value?.trim().toLowerCase()
    // console.log(valor)
    if(valor === 'strider'){
      // return ERROR
      return {noStrider: null}
    }
    return null

  }

//   noPuedeSerStrider(control: FormControl){
//     const valor:string = control.value?.trim().toLowerCase()
//     // console.log(valor)
//     if(valor === 'strider'){
//       // return ERROR
//       return {noStrider: null}
//     }
//     return null

//   }