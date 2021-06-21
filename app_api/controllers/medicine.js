const mongoose = require("mongoose");
const Medicine = mongoose.model("Medicine")

const MedicineList =(req,res) =>{
    Medicine.find().exec(function(err,Medicinedata){
        if(err){
            res.status(404).json(err);
        return;    
        }
        res.status(200).json(Medicinedata)
        
    });

}
const createMedicineList = (req,res)=>{
    Medicine.create({
        name:req.body.name,
        disease:req.body.disease,
        price:req.body.price,
        companyname:req.body.companyname,
        quantity:req.body.quantity,
        type:req.body.type,
        effectiveness:req.body.effectiveness

    }, (err,Medicinedata) => {
        if(err) {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(Medicinedata);
        }

    });
};

const MedicineReadOne =(req,res) => {
    Medicine.findById(req.params.medicineid).exec((err, Medicinedata) => {
        if (!Medicinedata) {
          return res.status(404).json({"message": "Medicine not found"});
        } 
        else if (err) {
          return res.status(404).json(err);
        }
        res.status(200).json(Medicinedata);
       });
};
const updateMedicinelist = (req,res) => {
    if(!req.params.medicineid){
        res.status(404).json({"message":"not found,Medicineid is required" 
    });

    }
    Medicine.findById(req.params.medicineid).exec((err,Medicinedata)=>{
        if(!Medicinedata){
            res.status(404).json({"massage":"Medicineid is not found"});
            return;
        }else if(err){
            res.status(400).json(err);
            return;
        }
        
        Medicinedata.name=req.body.name,
        Medicinedata.disease=req.body.disease,
        Medicinedata.price=req.body.price,
        Medicinedata.companyname=req.body.companyname,
        Medicinedata.quantity=req.body.quantity,
        Medicinedata.type=req.body.type,
        Medicinedata.effectiveness=req.body.effectiveness
        Medicinedata.save((err,Medicinedata) =>{
            if(err){
                res.status(404).json(err);

            }else{
                res.status(200).json(Medicinedata);
            }
        });
    }
);
};
const deleteMedicine =(req,res) => {
    const MedicineId = req.params.medicineid;
    if(MedicineId){
        Medicine.findByIdAndRemove(MedicineId)
        .exec((err,Medicinedata)=>{
            if(err){
                res.status(404).json(err);
              return;  
            }res.status(204).json(null);
        });
    }else{
        res.status(404).json({"message":"no Medicineid"});
};
};

module.exports={
    MedicineList,
    createMedicineList,
    MedicineReadOne,
    updateMedicinelist,
    deleteMedicine

};