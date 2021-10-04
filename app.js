

const express= require("express");
const app= express();
const port=process.env.port||2000;

const nav = [{link:'/books',name:'books'},
             
            {link:'/authors',name:'Authors'},

            {link:'/login',name:'login'},
        {link:'/signup',name:'signup'},
        {link:'/Add Book', name:'add book'},
        {link:'/Add Authors', name:'add authors'}
    ];

const booksRouter= require('./src/routes/bookRoutes')(nav);

const authorRouter= require('./src/routes/authorRoutes')(nav);

const loginRouter= require('./src/routes/loginRoutes')(nav);

const signupRouter= require('./src/routes/signupRoutes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);


app.get('/',function(req,res){

    res.render("index",
    {
        nav,
        title:'Library'
    });
});



app.listen(port,()=>{console.log("server ready at " +port)});

