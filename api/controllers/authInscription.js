import bcrypt from "bcrypt";
import { createSecretToken } from "../util/secretToken.js";
import User from "../model/utilisateurs.js";

export const inscription = async (req, res, next) => {
  try {
    console.log("bien recu");
    const { addressEmail, motDePasse, firstname, phonenumber } = req.body;
    console.log(addressEmail, motDePasse, firstname, phonenumber);

    const user = await User.create({
      addressEmail,
      motDePasse: await bcrypt.hash(motDePasse, 12),
      firstname,
      phonenumber,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: error.message });
  }
};

export const connexion = async (req, res, next) => {
  try {
    const { addressEmail, motDePasse } = req.body;
    const user = await User.findOne({ addressEmail });
    console.log(user);
    if (user && (await bcrypt.compare(motDePasse, user.motDePasse))) {
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res.send(user);
    }
    return res.json({ message: "Incorrect password or email" });
  } catch (error) {
    console.error(error);
  }
};

export const utilisateur = async (req, res) => {

try {
      const user = await User.find({})
      res.send(user);
} catch (error) {
  console.log(error);
}

}