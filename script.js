
var inputname = document.getElementById("nameInput")
var  mail = document.getElementById("mailInput")
var pwd = document.getElementById("pwdInput")
var btn = document.getElementById("form__btn")


 

mail.addEventListener("click",function(){

    console.log(inputname.value)
    var req1 = document.querySelector(".form__req1")
     if(inputname.value == 0)
    {
       req1.classList.remove("form__req1")
       console.log(req1)
       
    }

})


pwd.addEventListener("click",function(){

  console.log(inputname.value)
  var req11 = document.querySelector(".form__req11")
  var req2 = document.querySelector(".form__req2")
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  console.log(mail.value)
   if(mail.value == 0)
  {
     req11.classList.remove("form__req11")
     console.log(req11)
    
  }
  
  else
       
       if(mail.value.match(mailformat))
       {
        return true;
       }
       else
       {
        //alert("You Have invalid email")
        req2.classList.remove("form__req2")
        return false 
      } 
  
  })

btn.addEventListener("click",function(){  

    console.log(pwd.value)
    var req3 = document.querySelector(".form__req3")
    var pwdlen = pwd.value.length 
    console.log(pwdlen) 
     if(pwdlen == 0 || pwdlen<6)
     {
      req3.classList.remove("form__req3")
      //alert("too short")

     }
  
})
var success = document.querySelector(".success")
btn.disabled=true
console.log(pwd.value)
   
 
 pwd.addEventListener("change",function()
{
  if(inputname.value == 0 && mail.value == 0 && pwd.value == 0 )
  {
    btn.disabled=true    
  }
   else{
         btn.disabled=false
    success.innerHTML = '<span style="color: red;"> Your Form Registered Successfully..</span>'
   }
  })
  
