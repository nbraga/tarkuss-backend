const mongoose = require('mongoose');
const {Schema} = mongoose;

const adressSchema = new Schema(
    {
        cep:Number,
        rua:String,
        complemento: String,
        bairro:String,
        uf:String,
        numero:String,
        cidade:String,
        userId: mongoose.ObjectId,
    },
    { 
    timestamps: true
    }
);

