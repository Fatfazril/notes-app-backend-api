const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = hapi.server({
    port: 3500,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log('Server running at:', server.info.uri);
};
init();
