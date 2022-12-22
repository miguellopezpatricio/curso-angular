
const {Router} = require('express')
const {check} = require('express-validator')

const { crearUsario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')


const router = Router()

// Crear nuevo usuario
router.post('/new', [

    check('name','El nombre es obligatorio.').not().isEmpty(),
    check('email','El email no es correcto.').isEmail(), // middleware npm express.validator
    check('password','La contraseña es pequeña. Mínimo 6 caracteres.').isLength({min:6}), // middleware npm express.validator
    validarCampos // llamo a mi middleware

],crearUsario)



// Login de usuario
router.post('/',[
    check('email','El email no es correcto.').isEmail(), // middleware npm express.validator
    check('password','La contraseña es pequeña. Mínimo 6 caracteres.').isLength({min:6}), // middleware npm express.validator
    validarCampos
    
] ,loginUsuario)



// Validar y revalidar token
router.get('/renew',validarJWT, revalidarToken)




module.exports = router
