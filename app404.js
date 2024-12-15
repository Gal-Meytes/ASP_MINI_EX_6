import { createServer } from "http";
createServer((request, response) => {
response.statusCode = 404;
response.end("Hello world");
}).listen(1234);
