
const request = require('request');

const apiOptions = {
    server:'http://localhost:3000'
};


const _renderHomepage = function(req,res,responseBody){
    res.render('medicine-list-display',{
        medicines:responseBody
    })
}

const Medicinelist = function(req,res){

    const path = '/api/medicines';
    const requestOptions = {
        url : apiOptions.server + path,
        method :'GET',
        json :{}
    };
    request(
        requestOptions,
        (err, response, body) => {
        _renderHomepage(req,res,body);
        }
   );
};

const _renderDetailPage = function(req,res,responseBody){
    res.render('medicine-detail-display',{
        currentmedicine : responseBody
    });
};

const MedicineInfo = function(req,res){
    const path = `/api/medicines/${req.params.medicineid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}

    };

    request(
        requestOptions,
        (err,response,body) => {
            _renderDetailPage(req,res,body);
        }
    );
};
const _renderCreatePage =function(req,res){
    res.render('create-new-medicine',{
        title:"Create New Medicine"

    });
};
const addNewMedicine = function(req,res){
    _renderCreatePage(req,res);
};
const doAddNewMedicine = function(req,res){
    const path = '/api/medicines';
    const postdata = {
        name:req.body.name,
        disease:req.body.disease,
        price:req.body.price,
        companyname:req.body.companyname,
        quantity:req.body.quantity,
        type:req.body.type,
        effectiveness:req.body.effectiveness
    };
    const requestOptions ={
        url:apiOptions.server + path,
        method:'POST',
        json:postdata
  };
    request(
        requestOptions,
        (err,response,body) => {
            if (response.statusCode===201){
                res.redirect('/list');
            }
        }
    
    );
}; 


module.exports = {
   MedicineInfo,
   Medicinelist,
   doAddNewMedicine,
   addNewMedicine
    
};














