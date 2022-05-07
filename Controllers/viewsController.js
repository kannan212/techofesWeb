const Workshop = require('../Models/workshopModel');
const Event = require('../Models/eventModel');
const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getHome = (req, res, next) => {
    // if(res.locals.user){             commented by us
        res.render('pages/index',{target:"#"});
      };
       // else{
       //  res.render('pages/index',{login:false});
       // }
exports.getRegister = (req, res, next) => {
        res.render('pages/register');
};

exports.getEvents = (req,res, next) => {
  res.render('pages/events');
};

exports.getAbout = (req,res,next) => {
  res.render('pages/index',{target: "about"});
}

exports.getSponsor = (req,res,next) => {
  res.render('pages/index',{target:"sponsors"});
}
exports.getContact = (req,res,next) => {
  res.render('pages/index',{target:"contact"});
}
exports.getGallery = (req,res,next) => {
  res.render('pages/gal');
}



exports.getDance = (req,res,next) => {
  res.render('pages/dance');
}
exports.getCarnival = (req,res,next) => {
  res.render('pages/carnival');
}
exports.getEng_lit = (req,res,next) => {
  res.render('pages/eng_lit');
}
exports.getFun_events = (req,res,next) => {
  res.render('pages/fun_events');
}
exports.getGeneral = (req,res,next) => {
  res.render('pages/general');
}
exports.getHunt = (req,res,next) => {
  res.render('pages/hunt');
}
exports.getMarket_ent = (req,res,next) => {
  res.render('pages/market_entre');
}
exports.getOnline_event = (req,res,next) => {
  res.render('pages/online_event');
}
exports.getPhotography = (req,res,next) => {
  res.render('pages/gallery');
}
exports.getPuzzle = (req,res,next) => {
  res.render('pages/puzzle');
}
exports.getQuiz = (req,res,next) => {
  res.render('pages/quiz');
}
exports.getSports = (req,res,next) => {
  res.render('pages/sports');
}
exports.getTamil_lit = (req,res,next) => {
  res.render('pages/tamil_lit');
}
exports.getVariety = (req,res,next) => {
  res.render('pages/variety');
}
exports.getWorkshop = (req,res,next) => {
  res.render('pages/workshop');
}
exports.getMusic = (req,res,next) => {
  res.render('pages/music');
}

// exports.logout = (req, res, next) => {
//     res.cookie('jwt', 'loggedout', {
//         expires: new Date(Date.now() + 10 * 1000),
//         httpOnly: true
//       });
//     if(res.locals.user){
//         res.render('pages/index',{login:true});}
//        else{
//         res.render('pages/index',{login:false});
//        }
// };

// exports.getSponsors = (req, res, next) => {
//     if(res.locals.user){
//      res.status(200).render('pages/sponsors',{isAlert:false,login:true});
//     }else{
//     res.status(200).render('pages/sponsors',{isAlert:false,login:false});
//     }
// };
//
// exports.getResonance = (req, res, next) => {
//     if(res.locals.user){
//         res.render('pages/resonance',{login:true});}
//        else{
//         res.render('pages/resonance',{login:false});
//        }
// };
// exports.getContact = (req, res, next) => {
//     if(res.locals.user){
//         res.status(200).render('pages/contact',{isAlert:false,login:true});
//        }else{
//        res.status(200).render('pages/contact',{isAlert:false,login:false});
//        }
// };
// exports.getAllWorkshops = catchAsync(async (req, res, next) => {
//     const workshops = await Workshop.find();
//     if(res.locals.user){
//     res.status(200).render('pages/workshops', {
//         title: 'Workshops',
//         workshops,
//         login:true
//       });
//     }else{
//         res.status(200).render('pages/workshops', {
//             title: 'Workshops',
//             workshops,
//             login:false
//           });
//     }
// });
// exports.getWorkshop = catchAsync(async (req, res, next) => {
//
//     const workshop = await Workshop.findOne({ slug: req.params.slug });
//     let bookedvalue = false;
//
//     if (!workshop) {
//       return next(new AppError('There is no Workshop with that name.', 404));
//     }
// if(res.locals.user){
//     if(res.locals.user.workshopBookings.some(item => item.Name === `${workshop.name}`))
//     {bookedvalue=true;}
//     res.status(200).render('pages/Registration', {
//       title: `${Workshop.name} Workshop`,
//       workshop,
//       userid:res.locals.user.uid,
//       login:true,
//       booked:bookedvalue
//     });
// }else{
//     res.status(200).render('pages/Registration', {
//         title: `${Workshop.name} Workshop`,
//         workshop,
//         login:false,
//         userid:false,
//       booked:bookedvalue
//       });
// }
//   });
//   exports.getMetaWorkshop = (req, res, next) => {
//     if(res.locals.user){
//         res.render('pages/metaRegistration',{login:true});}
//        else{
//         res.render('pages/metaRegistration',{login:false});
//        }
// };
//
// exports.getAllEvents =  catchAsync(async(req, res, next) => {
//     const events = await Event.find();
//     if(res.locals.user){
//         res.render('pages/events',{
//             title: 'Events',
//             events,
//             login:true
//         });}
//        else{
//         res.render('pages/events',{
//             title: 'Events',
//             events,
//             login:false
//         });
//        }
// });
// exports.getEvent = catchAsync(async (req, res, next) => {
//
//     const event = await Event.findOne({ slug: req.params.slug });
//     let bookedvalue = false;
//     if (!event) {
//       return next(new AppError('There is no Event with that name.', 404));
//     }
//   console.log('hereee');
// if(res.locals.user){
//     if(res.locals.user.eventBookings.some(item => item.Name === `${event.name}`))
//     {bookedvalue=true;}
//     res.status(200).render('pages/EventRegistration', {
//       title: `${Event.name} Event`,
//       event,
//       userid:res.locals.user.uid,
//       login:true,
//       booked:bookedvalue
//     });
// }else{
//
//     res.status(200).render('pages/EventRegistration', {
//         title: `${Event.name} Event`,
//         event,
//         userid:false,
//         login:false,
//         booked:bookedvalue
//       });
// }
//   });
// exports.getLogin = (req, res, next) => {
//     if(res.locals.user){
//         res.render('pages/login',{login:true});}
//        else{
//         res.render('pages/login',{login:false});
//        }
// };
// exports.getDashboard =  catchAsync(async(req, res, next) => {
//     if(res.locals.user){
//         const user = await User.findOne({uid:res.locals.user.uid});
//     if (!user) {
//       return next(new AppError('There is no User with that name.', 404));
//     }
//     res.render('pages/profile',{login:true,user});
// }
// });
// exports.getRegistration = (req, res, next) => {
//     if(res.locals.user){
//         res.render('pages/Registration',{login:true});}
//        else{
//         res.render('pages/Registration',{login:false});
//        }
// };
// exports.getResetPassword = (req, res, next) => {
//     return res.status(200).render('pages/newpassword');
// };
//
// exports.getForgotPassword =  catchAsync(async(req, res, next) => {
//     res.render('pages/ForgotPassword');
// });
//
// exports.getResetPassword = catchAsync(async (req, res, next) => {
//     console.log(req.params);
//     res.render('pages/resetPassword',{token:req.params.token});
// })
//
// exports.getSchedule = (req, res, next) => {
//     if(res.locals.user){
//         res.render('pages/schedule',{login:true});}
//        else{
//         res.render('pages/schedule',{login:false});
//        }
// };
