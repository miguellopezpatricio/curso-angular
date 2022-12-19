
interface Reproductor{
    volumen: number
    segundo: number
    cancion: string
    detalles: Detalles
}

interface Detalles{
    autor:string
    anho: number
}


const reproductor:Reproductor = {
    volumen: 90,
    segundo: 23,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheedan',
        anho: 2020
    }
}

const autor = 'Fulano'
const {volumen, segundo, cancion, detalles:{autor:autorDetalle}} = reproductor // desestruturación de objetos
// const {autor} = detalles

console.log('El volumen actual es: ', volumen)
console.log('El segundo actual es: ', segundo)
console.log('La canción actual es: ', cancion)
console.log('El autor es: ', autorDetalle)

// Desestruturación de arreglos
const dbz: string[] = ['Goku','Vegeta','Trunks']
const [,,p3] = dbz
console.log('Personaje 3: ', p3)