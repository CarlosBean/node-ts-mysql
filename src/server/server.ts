import express from "express";
import path from 'path';
import { SERVER_PORT } from '../global/environment';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.port = SERVER_PORT;
        this.app = express();
    }

    static init() {
        return new Server();
    }

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    start(callback: () => void) {
        this.app.listen(this.port, callback);
        this.publicFolder();
    }
}