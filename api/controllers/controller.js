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

export const detail=async(req,res)=>{
 try{
    let id= req.params.id
    console.log("tout mon :", id);
    let voiture = await vehicule.findOne({_id:id})
    return res.status(200).json({voiture})

 }catch(error){
    return res.status(400).json({ message: error });
 }

}
