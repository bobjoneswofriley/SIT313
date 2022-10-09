//Defines email packages
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Defines express and body parser packages
const bodyParser = require("body-parser");
const { Console } = require("console");
const express = require("express");
const https = require("https");
const cors = require("cors")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res)=>{

})

const sendMail = async (msg) =>{
    try {
        await sgMail.send(msg);
        console.log("Message is sent succesfully");
    } catch (error) {
        console.error(error);

        if(error.response)
        {
            console.error(error.response.body);
        }
    }
};

app.post('/', (req, res) => {
    const address = email;
    console.log(address);
    sendMail({
        to: address,
        from: 'rmlew@deakin.edu.au',
        subject: 'Nodejs',
        html: '<h1>Test</h1>'
    });
})

app.listen(8003, function(){
    console.log("Server is running on port 8003");
})