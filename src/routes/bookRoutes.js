
const express= require("express");

const booksRouter =express.Router();

function router(nav){

    var books=[
   
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img:"tom.jpg"
         },
         {
            title: 'Harry potter',
            author: 'J K Rowling',
            genre:'Fantasy',
            img:"hary.jpg"
         },
         {
            title: 'Pathummayude adue',
            author: 'Basheer',
            genre:'Drama',
            img:"bash.jpg"
         }
         
    ]

    booksRouter.get('/',function(req,res){

        res.render("books", {
            nav,
           
            title:'Library',
            books
        });
    });
    
    
    booksRouter.get('/:i',function(req,res){
       const i= req.params.i;
        res.render("book", {
            
            nav,
            title:'Library',
           book: books[i]
        })
    })

return booksRouter;

}

module.exports=router;