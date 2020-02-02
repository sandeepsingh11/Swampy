const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

const url = "https://api.websitecarbon.com/b?url=";



router.post('/', function(req, res) {
    console.log(req.body);

    res.sendFile(__dirname + "/public/index.html");
});


// window.onload = function() {
//     document.getElementById("submit").addEventListener("submit", submit);

//     function submit() {
//         var input = document.getElementById("submit").value;
//         console.log(input);
//     }
// }


module.exports = router;