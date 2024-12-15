import { createServer } from "http";
createServer((request, response) => {
if (request.url === '/foo') {
response.write('<html><body><b>foo</b></body></html>');
} else if (request.url === '/bar') {
response.write('<html><body><u>bar</u></body></html>');
} else {
response.statusCode = 404;
}
response.end();
}).listen(1234);
