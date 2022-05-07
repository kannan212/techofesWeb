const express = require('express');

const viewsController = require('../Controllers/viewsController');
const userController = require('../Controllers/userController');

const router = express.Router();

router.get('/', viewsController.getHome);
router.get('/register', viewsController.getRegister);
router.get('/events', viewsController.getEvents);
router.post('/register', userController.register);
router.get('/about',viewsController.getAbout);
router.get('/gal',viewsController.getGallery);
router.get('/sponsors',viewsController.getSponsor);
router.get('/contact',viewsController.getContact);


router.get('/dance',viewsController.getDance);
router.get('/music',viewsController.getMusic);
router.get('/carnival',viewsController.getCarnival);
router.get('/eng_lit',viewsController.getEng_lit);
router.get('/fun_events',viewsController.getFun_events);
router.get('/general',viewsController.getGeneral);
router.get('/hunt',viewsController.getHunt);
router.get('/market_ent',viewsController.getMarket_ent);
router.get('/online_event',viewsController.getOnline_event);
router.get('/photography',viewsController.getPhotography);
router.get('/puzzle',viewsController.getPuzzle);
router.get('/quiz',viewsController.getQuiz);
router.get('/sports',viewsController.getSports);
router.get('/tamil_lit',viewsController.getTamil_lit);
router.get('/variety',viewsController.getVariety);
router.get('/workshop',viewsController.getWorkshop);


// router.get('/workshops', viewsController.getAllWorkshops);
// router.get('/events', viewsController.getAllEvents);


module.exports = router;
