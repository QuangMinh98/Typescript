import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    filename: {
        type: 'string',
        required: true
    },
    file_url: {
        type: 'string',
        required: true
    },
    file_type: {
        type: 'string',
        required: true
    },
    status: {
        type: Number,
        default: 1
    },
    upload_type: {
        type: Number
    },
    created_time: { 
        type: Date,
        default: Date.now,
        immutable: true
    }
});

const File = mongoose.model('File', fileSchema);

export {File} ;