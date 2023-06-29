import achat from "../model/transaction.js";
import utilisateur from "../model/utilisateurs.js"
import produit from "../model/vehicule.js"


export const payements =  async(req,res) =>{
  
     try {
        const { userId,mount,vehiculeId } = req.body;
        // let amount= 2500;
        // let userId="649b103eb5d521f07edecaf5"
       const utiliseur = await utilisateur.findById(userId);
       console.log(utilisateur);

      //  let vehiculeId="64919134c031281bde9f3254"
       
        if( utiliseur&& utiliseur.Compte<mount){
          return  res.send(utilisateur.Compte);
        }else{
            utiliseur.Compte-=mount;
            await utiliseur.save()
        }
        //const product = await produit.findById(vehiculeId);
       
        //if (product) {
         // product.paidTransaction = newTransaction._id;
         // await product.save();
       // }

        // Créez une nouvelle transaction avec les informations fournies
        const newTransaction = await achat.create({
            user: userId ,
            product: vehiculeId ,
            amount:mount,
            paymentStatus: "paye",
        })
        await newTransaction.save()
        console.log(newTransaction.user)
       
        
     const utilisateurFind=await utilisateur.findById(newTransaction.user)
    
        res.status(200).json({ message: "succes de transaction" });
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: "nous pouvons pas"});
      }


}



export const annulation=  async (req, res) => {
        try {
            

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


export const getTransationall= async (req, res) => {

    try {
        const transaction = await achat.find({})
         res.send(transaction)
    } catch (error) {
        console.log(error);
    }

}


