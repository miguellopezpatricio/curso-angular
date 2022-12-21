

const {response} = require('express')
const { validationResult } = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')


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


        // Crear usuario de BBDD
        await dbUser.save()



        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            msg: 'Usuario creado con éxito'
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

const loginUsuario = (req, res = response ) => {

    const { email, password} = req.body
    console.log(email, password)


    return res.json({
        ok:true,
        msg:'Login usuario /'
    })

}

const revalidarToken = ( req, res = response ) => {

    return res.json({
        ok:true,
        msg:'Validar usuario /renew'
    })

}

module.exports = {
    crearUsario,
    loginUsuario,
    revalidarToken
}