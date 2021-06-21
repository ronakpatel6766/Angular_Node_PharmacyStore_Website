var express = require('express');
var router = express.Router();

/* GET home page. */

//const CtrlMain=require('../controllers/about');
const ctrlmedicines=require('../controllers/medicineabout');
//const Ctrlabout=require('../controllers/details');

/* GET home page. */

//router.get('/about',Ctrlabout.about);
router.get('/list',ctrlmedicines.Medicinelist);
router.get('/medicines/:medicineid',ctrlmedicines.MedicineInfo);
router.route('/new')
.get(ctrlmedicines.addNewMedicine)
.post(ctrlmedicines.doAddNewMedicine);
module.exports = router;
