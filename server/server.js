const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public"); // '__dirname' is the current directory and the other arguments are files that we want to attach to this current folder.

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
}); // configure custom process when exists a get request. In this case we configure something when cannot get a react route with * means all directions

app.listen(3000, () => {
  console.log("Server is up");
});
