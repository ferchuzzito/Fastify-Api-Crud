const fastify = require('fastify')({
     logger: true
});
require('./utils/Mongoose');
const ProductRoutes = require("./routes/products.routes");



const swagger = require("./utils/swagger");

fastify.register(require("fastify-swagger"), swagger.options);

ProductRoutes.forEach(route => {
     fastify.route(route);
});


const start = async () => {
     try {
          await fastify.listen(3000);
          fastify.swagger();
          fastify.log.info(`server listen on ${fastify.server.address().port}`)
     } catch (error) {
          fastify.log.error(error);
          process.exit(1);
     }
}

start();