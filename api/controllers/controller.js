import vehicule from "../model/vehicule.js";

export const getVehicule = async (req, res) => {
  try {
    let voiture = await vehicule.find({});
    console.log(voiture);
    return res.send(voiture);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const detail=async()=>{
 try{
    let id= req.body.id
    let voiture = await vehicule.findOne({id:id});


 }catch(error){
    return res.status(400).json({ message: error });
 }



}
