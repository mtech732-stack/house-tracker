const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = '/Users/mohammedalbarrak/Desktop/house-tracker';
const mime = { '.html':'text/html', '.js':'application/javascript', '.json':'application/json', '.css':'text/css', '.svg':'image/svg+xml', '.png':'image/png' };
http.createServer((req, res) => {
  const file = path.join(dir, req.url === '/' ? '/index.html' : req.url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'text/plain' });
    res.end(data);
  });
}).listen(3777, () => console.log('Serving on 3777'));
