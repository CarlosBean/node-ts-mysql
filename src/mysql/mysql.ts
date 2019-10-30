import mysql, { MysqlError } from 'mysql';

export default class MySql {
    private static _instance: MySql;
    cnn: mysql.Connection;
    connected = false;

    constructor() {
        console.log('Initialized Class');
        this.cnn = mysql.createConnection({
            host: 'Localhost',
            user: 'root',
            password: 'Admin.1234',
            database: 'node-ts-mysql'
        });

        this.connectDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static executeQuery(query: string, callback: Function) {
        this.instance.cnn.query(query, (err, results: Object[], fields) => {
            if (err) {
                console.log('Query error', err);
                return callback(err);
            }

            if (results.length === 0) {
                callback('the requested record does not exist');
            } else {
                callback(null, results);
            }

        });
    }

    private connectDB() {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log('Database online');
        });
    }
}