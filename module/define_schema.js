var mongoose = require('mongoose'),
    book     = new mongoose.Schema({

        catagories: {
                 type:String
                    },
        kindleTybe: {
            tybe:String
        },           
        books: {
                 id:Number,
                 title:String,
                 downloads:Number,
                 bookName:String,
                 bages:Number
                },
 });
 module.exports = mongoose.model('books', book);
