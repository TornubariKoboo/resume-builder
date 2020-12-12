const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

const {
    allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 8080;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main", handlebars: allowInsecurePrototypeAccess(handlebars)}));
app.set("view engine", "handlebars");

//ROUTES

//add Views routes  

//add API routes

/* //uncomment this when sequelize is set up
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on http://localhost:${PORT}`);
    })
})
*/