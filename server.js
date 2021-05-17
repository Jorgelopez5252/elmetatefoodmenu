const express = require("express");
const app = express();

const PORT = process.env.PORT || 1738;

app.use(express.static(__dirname + '/pages'));
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));