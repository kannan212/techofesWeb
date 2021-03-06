//core modules
const path = require("path");

//other-modules
const express = require("express");
const morgan = require("morgan");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const mongoose = require("mongoose");
const AdminJSMongoose = require("@adminjs/mongoose");
const dotenv = require("dotenv");
const nodemailer = require('./utils/nodemailer');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
//imported functions
const AppError = require("./utils/appError");
const globalErrorHandler = require("./Controllers/errorController");
const viewRouter = require("./Routes/viewsRoutes");
const userRouter = require("./Routes/userRoutes");
// const workshopRouter = require("./Routes/workshopRoutes");
// const eventRouter = require("./Routes/eventRoutes");
const User = require("./Models/userModel");
// const Workshop = require("./Models/workshopModel");
// const Event = require("./Models/eventModel");

dotenv.config({ path: "./config.env" });
AdminJS.registerAdapter(AdminJSMongoose);
app = new express();
app.enable('trust proxy');
app.use(cors());
app.options('*', cors());
const AdminJSOptions = {
  resources: [

    {
      resource: User,
      options: {
        properties: {
          uid: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          name: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          email: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          phone: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          year: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          college: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          department: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          rollno: {
            isVisible: { list: true, filter: true, show: true, edit: false },
          },
          DateOfCreation: {
            isVisible: { list: false, filter: false, show: true, edit: false },
          },
        },
      },
    }
    // Workshop ,
    // Event,
  ],
};
const adminJs = new AdminJS(AdminJSOptions);

const ADMIN = {
  email: process.env.ADMIN_USER,
  password: process.env.ADMIN_PASSWORD,
};

//const router = AdminJSExpress.buildRouter(adminJs)
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: "adminjs",
  cookiePassword: "somepassword",
});

app.use(adminJs.options.rootPath, router);

const run = async () => {
 /* const DB = process.env.DATABASE_CLOUDURL.replace(
  '<password>',
  process.env.DB_PASSWORD
);
*/
// const DB = process.env.DATABASE_URL;         commented by us

const DB = "mongodb+srv://techofes:Techofes22@techofes22.wq3h0.mongodb.net/Techofes22?retryWrites=true&w=majority"
  const mongooseConnection = await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection successful...");
    })
    .catch((err) => {
      console.log("DB not connected...");
    });
  app.listen(4000, () =>                            // port variable changed to 3000
    console.log(`App is running on Port: 4000`)
  );
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
// app.use(compression());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(express.static(path.join(__dirname, "Public/")));
app.use(morgan("dev"));
app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/workshops", workshopRouter);      commented by us
// app.use("/api/v1/events", eventRouter);

// error handlers
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
run();
module.exports = app;
