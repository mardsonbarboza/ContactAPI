const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Catálogo de Filmes',
      version: '1.0.0',
      description: 'Documentação da API para gerenciar um catálogo de filmes.',
    },
    servers: [
      {
        url: 'http://localhost:8080', // URL base da API
      },
    ],
  },
  apis: ['./routers/*.js'], // Caminho para os arquivos com as rotas e comentários
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;
