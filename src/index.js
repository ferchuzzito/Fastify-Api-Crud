const fastify = require('fastify')({
     logger: true
})
const ProductRoutes = require("./routes/products.routes.js")

require('./utils/Mongoose')

fastify.get("/", (request, reply) => {
     reply.send({hello: "world"});
} )

ProductRoutes.forEach(route => {
     fastify.route(route); 
});


const start = async () => {
     await fastify.listen(3000)
     fastify.log.info(`server listen on ${fastify.server.address().port}`)
}

start();