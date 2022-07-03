import mongoose from 'mongoose';

const inventorySchema = mongoose.Schema({
    item_id : Number,
    item_name : String,
    Quantity : Number,
    price : Number,
    section : {
        type : String,
        default : "Null",
    },

});

const inventory = mongoose.model('inventory', inventorySchema);

export default inventory;