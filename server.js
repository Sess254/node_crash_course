const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');

    //set header
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>hello world</p>');
    res.write('<p>hello world, again</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

