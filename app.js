const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();



// middleware
app.use(bodyParser.json());
app.use(cors());


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

// // handle Production
// if (process.env.NODE_ENV === 'production') {
//     // static folder for Express
//     app.use(express.static(__dirname + '/public/'));

//     // handle SPA
//     // redirects 404s to index, which would happen on a SPA
//     app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html') );
// }


// port setup
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server on port ${port}`));