const express = require('express');
const router =express.Router();
const ctrlmedicines = require('../controllers/medicine');

//medicines
router.route('/medicines').get(ctrlmedicines.MedicineList).post(ctrlmedicines.createMedicineList);
router.route('/medicines/:medicineid').get(ctrlmedicines.MedicineReadOne).put(ctrlmedicines.updateMedicinelist).delete(ctrlmedicines.deleteMedicine);
router.route('/medicines/delete/:medicineid').get(ctrlmedicines.deleteMedicine);
router.route('/medicines/update/:medicineid').put(ctrlmedicines.updateMedicinelist);


module.exports = router;    