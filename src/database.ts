import mongoose from 'mongoose';

export = async function() {
    try {
        await mongoose.connect("mongodb://localhost/benice", {
            autoReconnect: true,
            useCreateIndex: true,
            bufferMaxEntries: 0,
            bufferCommands: false,
            useNewUrlParser: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 1000
        });
        console.log('connect successful to', "mongodb://localhost/benice");
        const db = mongoose.connection;

        // When the mongodb server goes down, the driver emits a 'close' event
        db.on('close', () => { console.log('-> lost connection'); });
        // The driver tries to automatically reconnect by default, so when the
        // server starts the driver will reconnect and emit a 'reconnect' event.
        db.on('reconnect', () => { console.log('-> reconnected'); });
        db.on('error', () => { console.log('-> error connection'); });
        db.on('reconnectFailed', async () => {
            console.log('-> gave up reconnecting');
        });
    } catch (ex) {
        console.log('connect unsucessful!!!!', ex);
    }
}