import http.server, socketserver, os, sys
os.chdir('/Users/mohammedalbarrak/Desktop/house-tracker')
PORT = 3777
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({'.js':'application/javascript','.json':'application/json'})
with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'Serving on {PORT}')
    httpd.serve_forever()
