const Hapi = require('@hapi/hapi');
const routes = require("./routes")
require('./db/conexao')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    //https://hapi.dev/tutorials/routing/?lang=en_US
    server.route(routes);

    await server.start();
    console.log('API rodando em %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();