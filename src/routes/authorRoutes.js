
const express= require("express");

const authorRouter =express.Router();

function router(nav){

    var authors=[
   
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img:"jo.jpg"
         },
         {
            title: 'Harry potter',
            author: 'J K Rowling',
            genre:'Fantasy',
            img:"jk.jpg"
         },
         {
            title: 'Pathummayude adue',
            author: 'Basheer',
            genre:'Drama',
            img:"bash1.jpg"
         }
         
    ]

    authorRouter.get('/',function(req,res){

        res.render("authors", {
            nav,
           
            title:'Library',
            authors
        });
    });
    
    
    authorRouter.get('/:i',function(req,res){
       const i= req.params.i;
        res.render("author", {
            
            nav,
            title:'Library',
            author: authors[i]
        })
    })

return authorRouter;

}

module.exports=router;