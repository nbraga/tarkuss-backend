const Adress = require("../models/Adress");

// Register user and sign in
const register = async (req, res) => {
  const { cep, rua, complemento, bairro, numero, uf, cidade} = req.body;

  // Create user
  const newAdress = await Adress.create({
    cep,
    rua,
    complemento,
    bairro,
    numero,
    uf,
    cidade,
  });

  res.status(201).json({
   message: "Cadastrou"
  });
};

module.exports = {
  register,
};
