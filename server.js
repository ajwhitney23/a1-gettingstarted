const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if(request.url === '/') {
    sendFile( response, 'index.html' )
  } else {
    sendFile( response, request.url.substring(1) )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     if(err) {
      response.end( '404 Error: File Not Found' )
     } else {
      response.end( content, 'utf-8' )
     }
   })
}
