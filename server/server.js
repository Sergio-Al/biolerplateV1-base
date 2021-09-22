const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public"); // '__dirname' is the current directory and the other arguments are files that we want to attach to this current folder.
const port = process.env.PORT || 3000; // using some javascript or (||) feature which if the first is false return the second one.
// In order to deploy this to heroku, REMEMBER heroku provides an env file, that because we are set a process.env.PORT value to serve our app

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
}); // configure custom process when exists a get request. In this case we configure something when cannot get a react route with * means all directions

app.listen(port, () => {
  console.log("Server is up");
});
