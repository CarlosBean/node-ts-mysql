import Server from './server/server';
import router from './router/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.init();
server.app.use(router);

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

server.app.use(cors({ origin: true, credentials: true }));

server.start(() => {
    console.log(`Server running on port: ${server.port}`);
});