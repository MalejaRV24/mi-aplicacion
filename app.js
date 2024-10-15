const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
    res.end('¡Hola, mundo!');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
