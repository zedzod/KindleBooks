var data = require("../data/kindle.json");

module.exports = {
    getAll:()=>{
        return data;
    },
    
    getbyID:(id)=>{
        let result = false;
        for(let i in data.books){
            var book = data.books[i];
        if(book.id==id){
            result = true;
            return({"bookName": book.bookName});
        }
    }
    if(!result)
        return ({"Error":"book Not Found"});
    },
    search:(id,title)=>{
        let result = false;
        for(let i in data.books){
            var book = data.books[i];
        if(book.id==id && book.title==title){
            result = true;
            return({"Title": book.title,
            "downloads":book.downloads,
            "bookName":book.bookName,
            "bages":book.bages});
            }
    }
    if(!result)
        return ({"Error":"book Not Found"});
    },
}