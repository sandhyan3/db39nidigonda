var express = require('express');
const costume_controlers= require('../controllers/costume');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
   return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
 }

/* GET costumes */
router.get('/', costume_controlers.costume_view_all_Page );
router.get('/costumes/:id', costume_controlers.costume_detail);

/* GET detail costume page */ 
router.get('/detail', costume_controlers.costume_view_one_Page); 

/* GET create costume page */ 
router.get('/create',secured, costume_controlers.costume_create_Page);
/* GET create update page */ 
router.get('/update',secured, costume_controlers.costume_update_Page); 

/* GET create costume page */
router.get('/delete',secured, costume_controlers.costume_delete_Page);

module.exports = router;

