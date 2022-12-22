
const { response} = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req, res = resonse, next) => {

    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Error en token'
        })
    }

    try{

        const {uid, name} =jwt.verify(token, process.env.SECRET_JWT_SEED)
        // console.log(uid, name)
        req.uid = uid
        req.name = name


    }catch(err){
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })
    }

    // todo OK!
    next()
}

module.exports={
    validarJWT
}