import express = require('express');
var app = express();


function serve(req: any, resp: any): void {

    resp.send('Hello World ');
}

app.use('/', serve
);

app.listen(8000, function () {
    console.log('Running Server');

})