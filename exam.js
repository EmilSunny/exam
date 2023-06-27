var email=document.getElementById('field1');
var err1=document.getElementById('err1');
var err2=document.getElementById('err2');
var pwd=document.getElementById('field2');
var err3=document.getElementById('err3');

var regx=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
function validateEmail(){

    if(email.value.trim()==''){
      err1.innerText="Field cannot be empty";
      email.style.border='1px solid red'
      return false
  
  } 
  else if(!email.value.match(regx)){
      err1.innerText="Email is not correct format";
      email.style.border='1px solid red';
      return false
  }
  else {
      err1.innerText="";
      email.style.border="1px solid green";
      return true
    }
    }
    function validatePhoneno(){
        if(phoneno.value.trim()==''){
            err2.innerText="phone number should not be empty";
            phoneno.style.border='2px solid red';
            return false

        }
        else if(phoneno.value.length)
            err2.innerText="Phone number should be 10 characters";
            pwd.style.border="2px solid red";
            return false
    
        }
        else{
            err2.innerText='';
            phoneno.style.border="2px solid green";
            return true
        }
    
        function validatePass(){
            if(pwd.value.trim()==''){
                err3.innerText="password should not be empty";
                pwd.style.border="2px solid red";
                return false
            }
            else if(pwd.value.length <6){
                err3.innerText="Password should be more than 6 characters";
                pwd.style.border="2px solid red";
                return false
        
            }
            else{
                err3.innerText='';
                pwd.style.border="2px solid green";
                return true
            }
    
    }
    function varify(){
        if (!validateEmail()||!validatePass()){
            return false
        }
        else{
            return true
    }
    }
  
