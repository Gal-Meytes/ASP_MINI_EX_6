import express from 'express';
const app = express();
app.get('/', (req, res) => {
res.send('<html><body><h1>GET</h1></body></html>');
});
app.post('/', (req, res) => {
res.send('<html><body><h1>POST</h1></body></html>');
});
app.listen(1234);

