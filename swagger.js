const swaggerAutogen = require('swagger-autogen')();

const outputFile = './docs/api-spec.json';
const endpointsFiles = ['./dist/routes/index.js', './dist/routes/v1/index.js', './dist/routes/v2/index.js'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./dist/app.js'); // Your project's root file
});
