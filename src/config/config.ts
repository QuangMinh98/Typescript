import dotenv from 'dotenv';
dotenv.config();

export = {
    development: {
        connectionString: process.env.connection_string
    }
}