const express = require("express");
const router = require("./router.js");
const port = process.env.PORT || 3001;
const app = express();

app.use(router);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
