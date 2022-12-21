const mongoose = require("mongoose")


const dbConnection = async()=> {

    try{

        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
                } )

        console.log('BBDD online')

    }catch(error){
        console.log(error);
        throw new Error('Error al inicializar la BBDD');
    }
}


module.exports = {
    dbConnection
}