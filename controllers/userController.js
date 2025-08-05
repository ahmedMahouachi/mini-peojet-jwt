const { models } = require("../models");
const bcrypt = require("bcrypt");
const User = models.users;

exports.register = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  const existing = await User.findOne({ where: { email } });
  if (existing) {
    return res.status(409).json({ message: "Email déja utilisé" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    password: hashedPassword,
    first_name,
    last_name,
  });
  res.status(201).json({
    message: "Utilisateur créé",
    user
  });
};
