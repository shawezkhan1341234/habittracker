const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_constroller');


// Router to render the Home Page
router.get('/',homeControllers.home);

// Router to add Habit to the databse
router.post('/add',homeControllers.add);

// Router to Delete a Habit from the databse
router.get('/delete/:id', homeControllers.delete);

router.get('/change/done/:id/:i',homeControllers.done);
router.get('/change/not-done/:id/:i',homeControllers.notDone);
router.get('/change/none/:id/:i',homeControllers.none);



module.exports = router;