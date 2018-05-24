var mongoose = require('mongoose'),
    consts   = require('./consts'),
    book     = require('./module/define_schema');

mongoose.connect(consts.MLAB_KEY)
.then(
 () => {
     book.find({},
    (err,book) =>{
        if(err) console.log(`query error: ${err}`);
        console.log(book);
        mongoose.disconnect();
    });
 //console.log('connected');
 //mongoose.disconnect();
 },
 err => {
 console.log(`connection error: ${err}`);
 }
 );