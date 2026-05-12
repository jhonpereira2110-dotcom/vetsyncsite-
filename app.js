const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Define a pasta "public" como pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');
});