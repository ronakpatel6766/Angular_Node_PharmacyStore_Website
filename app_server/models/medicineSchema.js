const mongoose =require('mongoose');
const medicineSchema = new mongoose.Schema({
    name:
        {
            type:String,
            required:true
        },

    disease:
        
        {
            type:String,
            required:true
             
        },
    price:
        {
            type:String,
            required:true
        },
        
    companyname:
    {
        type:String,
        required:true
    },

    quantity:
    {
        type:String,
        required:true
    },

    type:
    {
        type:String,
        required:true
    },

    effectiveness:
    {
        type:Number,
        required:true,
        min:0,
        max:5
    }
});
mongoose.model('Medicine',medicineSchema);