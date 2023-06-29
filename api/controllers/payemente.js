import achat from "../model/transaction.js";
import utilisateur from "../model/utilisateurs.js"
import produit from "../model/vehicule.js"


export const payements =  async(req,res) =>{
  
     try {
        const { userId, productId, amount } = req.body;
        const utiliseur = await utilisateur.findById(userId);
        if( utiliseur&& utiliseur.Compte<amount){
          return 
        }else{
            utilisateur.compte-=amount;

            await utilisateur.save()
        }
   
    
        // Créez une nouvelle transaction avec les informations fournies
        const newTransaction = await achat.create({
            user: userId,
            product: productId,
            amount,
            paymentStatus: "paye",
        })
       

        const product = await produit.findById(productId);
        if (product) {
          product.paidTransaction = newTransaction._id;
          await product.save();
        }
    
        res.status(200).json({ message: "Paiement effectué avec succès" });
      } catch (error) {
        res.status(500).json({ message: "nous pouvons pas"});
      }


}

export const annulation=  async (req, res) => {
        try {
            const { transactionId  } = req.body;

            const updatedTransaction = await achat.findOneAndUpdate(
                { _id: transactionId },
                { $set: { paymentStatus: "Cancel" } })
                updatedTransaction.save()
    
                const trans = await utilisateur.findById(updatedTransaction.user);

                utilisateur.compte += trans.amount;
                await utilisateur.save();


}catch(error) {
    console.log(error);
}}


export const getTransation= async (req, res) => {

    try {
        const transaction = await achat.find({})
         res.send(transaction)
    } catch (error) {
        console.log(error);
    }

}


