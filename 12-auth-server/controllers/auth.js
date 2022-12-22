

const {response} = require('express')
const { validationResult } = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')


const crearUsario = async ( req, res = response ) => {


  
    const { name, email, password } = req.body
    // console.log(name, email, password)

    try{
        // Verificar email único
        const usuario = await Usuario.findOne({email: email})

        if(usuario) return res.status(400).json({
            ok: false,
            msg: 'Usuario ya existe con ese email'
        })

        // Crear usuario con modelo
        const dbUser = new Usuario(req.body)

        // Password Hashing
        const salt = bcrypt.genSaltSync()
        dbUser.password = bcrypt.hashSync(password, salt)



        // Generar el JWT
        const token = await generarJWT(dbUser.id, name)

        // Crear usuario de BBDD
        await dbUser.save()



        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            msg: 'Usuario creado con éxito',
            token
        })


    }catch(error){
        console.log(error)

        return res.status(500).json({
            ok: false,
            msg: 'Por favor, hable con el admin'
        })
    }


    return res.json({
        ok:true,
        msg:'Crear usuario /new'
    })

}

const loginUsuario = async (req, res = response ) => {

    const { email, password} = req.body
    //      console.log(email, password)

    try{

        const dbUser = await Usuario.findOne({email})

        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }

        // confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'El password no existe'
            })
        }

        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name)

        // respuesta del servicio
        return res.json({
            ok:true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'ERROR: Hable con el admin'
        })
    }



}

const revalidarToken = async ( req, res = response ) => {

        // Generar el JWT
        const token = await generarJWT(uid, name)  
    const { uid, name} = req

    return res.json({
        ok:true,
        uid,
        name
    
    })

}

module.exports = {
    crearUsario,
    loginUsuario,
    revalidarToken
}