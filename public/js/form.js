

let email=document.getElementById("email");
let pwd=document.getElementById("pwd");

let error= document.getElementById("error");
let error1= document.getElementById("error1");
let error2= document.getElementById("error2");
let error3= document.getElementById("error3");

let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let repwd= document.getElementById("repwd");
let mobnumber=document.getElementById("mobnum");
let unam= document.getElementById("unam");



               // email validation



function validateEmail(){

    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    error.innerHTML="";
    // let regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;


               if (email.value=="") {

                error.innerHTML="field cannot be empty";
                      
                      
                            error.style.color="red";

                               
                       
                                          return false;
                            
                             }

             else if(regexp.test(email.value)!=true){

                      error.innerHTML="please enter a valid email address";
                      
                            error.style.color="red";
                     
                    
                              return false;
                                          
                           }

          else if (email.value.trim()=="") {
  

            error.innerHTML="field cannot be empty";
                      
                   error.style.color="red";
            

                       return false;
            
          }
                
                    else{
                      
                      error.innerHTML="valid email address";
                      
                      error.style.color="green";

                      return true;
           }
                        
                         
                        
         }   
                                                        
              


                         // validate validatePassword



function validatePassword(){
                            
      if (pwd.value!=12345) {

         

        error1.innerHTML="12345";
        error1.style.color="red";
                   return false;
                          
                  }

                  

                      
  else if(pwd.value!=repwd.value)
                     
  {

       
    error2.innerHTML="password must match";
    error2.style.color="red";
               return false;
                      
            }
                else{
                    return true;
                }     
            }

function validateunam(){
    if (unam.value!="admin"){
      error3.innerHTML="admin";
        return false;
    }
    else{
        
        
        return true;
    }
}







                  




              // validate firstname & last name


             function validatefirstname(){

                  if (fname.value==""||lname.value=="") {
                
                     alert(" name field cannot be empty");
      
                           return false;
      
   
                  }
   
                  else{
      
                     return true;
  
                  }

  }
  
  
