const mongoose = require("mongoose");
const { Schema } = mongoose;

const adressSchema = new Schema(
  {
    cep:String,
    rua:String,
    complemento:String,
    bairro:String,
    numero:String,
    uf:String,
    cidade:String,
    userId: mongoose.ObjectId,
  },
);

Adress = mongoose.model("Adress", adressSchema);

module.exports = Adress;
