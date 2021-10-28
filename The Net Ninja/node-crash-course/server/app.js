const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
//express app
const app = express();
//connect to mangoDB
const dbURI =
  "mongodb+srv://Ahmad:vonbiq-5moCri-vicdyn@cluster0.6zk0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//using static with express to add css file
app.use(express.static("public"));

//using morgan as middleware function
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); //for accepting form data

//get handler to redirect '/' => '/blogs'
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

//get handler for '/about'
app.get("/about", (req, res) => {
  res.render("about", { title: "About me" });
});

//blog routes
app.use("/blogs", blogRoutes);

//404 page fires only if it gets to this point of the code
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// code example without ejs

// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", { root: __dirname });
//   });

//   //redirects
//   app.get("/about-me", (req, res) => {
//     res.redirect("/about");
//   });

//   //404 page fires only if it gets to this point of the code
//   app.use((req, res) => {
//     res.status(404).sendFile("./views/404.html", { root: __dirname });
//   });
// const blogs = [
//   {
//     title: "yoshi finds eggs",
//     snippet: "lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "Mario finds stars",
//     snippet: "lorem ipsum dolor sit amet consectetur",
//   },
//   {
//     title: "How to defeat bowser",
//     snippet: "lorem ipsum dolor sit amet consectetur",
//   },
// ];

// res.render("index", { title: "Home", blogs });

//add this if the views are not in a view folder
//app.set("views", "myviews");

//this is a midleware function server side
// app.use((req,res,next)=>{
//   console.log('new request made : ');
//   console.log('host: ',req.hostname);
//   console.log('path: ',req.path);
//   console.log('method: ',req.method);
//   next();//next to make it continue
// });

//get handler for '/add-blog'
// app.get("/add-blog", (req, res) => {
//   //create a new instance of a Blog based on the schema in the blog.js file
//   const blog = new Blog({
//     title: "new blog 3",
//     snippet: "THIS ONE IS DIFFERENT",
//     body: "LOOK MORE DEAPER INTO the truth inside of my life",
//   });

//   //we save the blog instance in the dataBase using .save() method from the mongoose module
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//get handler for '/all-blogs'
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//get handler for '/single-blog'
// app.get("/single-blog", (req, res) => {
//   //we use .then function as a callback function because the findById is an asynchronous method and therefore can take some time
//   Blog.findById("613cf0293fff1a0f23836d6b")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
