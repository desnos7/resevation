import vehicule from "../model/vehicule.js"


export const getVehicule= async(req,res)=>{
try {
    let voiture= await vehicule.find({})
   return  res.send(voiture)
    
} catch (error) {
    return res.status(400).json({message:error})
}
}


