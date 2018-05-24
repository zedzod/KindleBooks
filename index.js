const   express     = require('express');
        app         = express(),
        port        = process.env.PORT || 3000,
        connect     = require("./db_connect"),
        data        = require("./data/kindle.json"),
        func        = require("./module/allFuncs"),
        bodyParser  = require('body-parser');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended:true }));
        app.use('/assets', express.static(`${__dirname}/public`));


        app.use((req,res,next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
          
        app.get('/', (req,res) => {
            console.log('Trace: API Page');
            res.sendFile(__dirname + '/api/index.html');
          });


        app.get('/getAll/',
        (req,res)=>{
            res.setHeader('Debug', 'getAll func was reached');
            res.status(200).json(func.getAll());
        });
        
         
        app.get('/getBookByID/:id/',
        (req,res)=>{
            res.setHeader('Debug', 'getBookBtID func was reached');
            res.status(200).json(func.getbyID(req.params.id));
        });
        
        app.post('/getBookByID/:id/',
        (req,res)=>{
            res.setHeader('Debug', 'getBookBtID func was reached');
            res.status(200).json(func.getbyID(req.params.id));
        });
        
        app.get('/search/:id/:title',
        (req,res)=>{
            res.setHeader('Debug', 'search with id and title param func was reached');
            res.status(200).json(func.search(req.params.id,req.params.title));
        });  
        
        app.all('*', (req, res) => {
            res.status(200).json({"Error": "Request route did not match any option!"});
        });
  
        app.listen(port);
            console.log(`listening on port ${port}`);