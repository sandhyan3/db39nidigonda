var express = require('express');
const costume_controlers= require('../controllers/costume');
var router = express.Router();
/* GET costumes */
router.get('/', costume_controlers.costume_view_all_Page );
router.get('/costumes/:id', costume_controlers.costume_detail);

/* GET detail costume page */ 
router.get('/detail', costume_controlers.costume_view_one_Page); 
module.exports = router;