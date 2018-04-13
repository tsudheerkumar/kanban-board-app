const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/kanbanboard');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const BoardSchema = new Schema({
    name: {type: String, unique:true},
    lists: [{
        name: {type: String },
        tasks: [{
            desc: String
        }]
    }]
}, {collection:"Boards"});

var boardModal = mongoose.model('boardModal', BoardSchema);

module.exports = boardModal;