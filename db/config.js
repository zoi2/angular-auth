const mongoose = require("mongoose");

const dbConnection = async() =>{
    try {
        
        await mongoose.connect(process.env.BD_CNN, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        console.log('base de datos arriba')

    } catch (error) {
        
        console.log(error)
        throw new Error('Error a la hora de inicializar la base de datos');
    
    }
}

module.exports = dbConnection