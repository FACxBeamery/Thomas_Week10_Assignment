const express = require("express");
const router = require("./router.js");
const corsByPass = require("./middleware/corsByPass.js");
const port = process.env.PORT || 3000;
const app = express();

app.use(corsByPass);

app.use(router);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
