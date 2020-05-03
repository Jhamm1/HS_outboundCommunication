import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OutboundSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a first name'
    },
    message: {
        type: String            
    },
    email: {
        type: String            
    },
    number: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});