const swaggerAutogen = require('swagger-autogen')();

const outputFile = './docs/api-spec.json';
const endpointsFiles = ['./dist/app.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./dist/app.js'); // Your project's root file
});
