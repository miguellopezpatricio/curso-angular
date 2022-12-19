
/*
    ===== Código de TypeScript =====
*/

// let nombre:string = "Strider"
// let hp:number|string = 95
// hp= "full"

// nombre = "123"

// // console.log(nombre)

// let habilidades = ['bash','counter','healing']

// interface Personaje{
//     nombre:string,
//     hp:number,
//     habilidades:string,
//     puebloNatal?:string // opcional
// }

// const personaje = {
//     nombre: 'Strider',
//     hp: 100,
//     habilidades: ['bash','counter','healing']
// }

// interface PersonajeLOR{
//     nombre: string
//     pv: number
// }

// function curar(personaje:PersonajeLOR, curarX:number):void{


//     personaje.pv += curarX
//     console.log(personaje)
// }

// const nuevoPersonajeLOR = {
//     nombre: 'Strider',
//     pv: 50
// }

// curar(nuevoPersonajeLOR, 10)

interface SuperHeroe{
    nombre: string
    edad: number
    direccion: Direccion
    mostrarDireccion: ()=> string

}

interface Direccion{
    
        calle: string
        pais: string
        ciudad:string
    
}


const superHeroe: SuperHeroe = {

    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ', ' + this.direccion.pais
    }


}