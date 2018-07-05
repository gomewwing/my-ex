// let express = require('express');
// let bodyParser = require('body-parser');
// let path = require('path');
// let http = require('http');

// let app = express();

// let api = require('./server/api');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use(express.static(path.join(__dirname, 'dist')));

// app.use(app.route);
// routes.

// app.get('*'), (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// }

// let port = process.env.PORT || '3000';
// app.set('port', port);;

// let server = http.createServer(app);
// server.listen(port, () => console.log("Server is RUNNING"));

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
// Getting our POSTS routes
const posts = require('./server/routes/posts');

//Using middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', posts);

//Catch all other routes request and return it to the index
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/my-ex/index.html'))
});

const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log("Server is RUNNING"));
// app.listen(4600, (req, res)=>{
//     console.log(`RUNNING on port ${port}`);
    
// });




