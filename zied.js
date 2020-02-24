
function validation(){

    let validFname = document.getElementById("fname").value ;
    let validLname = document.getElementById("lname").value ;
    let validAdress = document.getElementById("Adress").value;
    let validEmail = document.getElementById ("email").value;
    let validPassword = document.getElementById("psw").value;
    let ValidComment = document.getElementById("Comment").value;
    let lowerCaseLetters =  /[a-z]/g ;
    let UpperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    
    
    let error=''


    if (validFname == "")
    {
      error+= 'enter your First name \n'
    }
    if (validLname == "")
    {
      error+= 'enter your Last name \n'
    }
    if (validEmail == "")
    {
      error+= 'enter your Email name \n'
    }
   else  
   {  
     if (validEmail.indexOf('@')==(-1)&&(validEmail.indexOf('.')==(-1)))
       alert("Your email lack @ '.'");
   else
   {
    if (validEmail.indexOf('@')==(-1))
    alert("Your email lack @ ");
    else 
    {
    if (validEmail.indexOf('.')==(-1))
    alert("Your email lack '.'");
  }
   }
  } 
  if ((validPassword!==("")) && (validPassword.length < 8))
  {
    alert('Password must be at least 8 characters')
  }
    if (validAdress == "")
    {
        error+= 'enter your Adress \n'
    
    }
      if (ValidComment == "")
    {
          error+= 'Tape something in Comment-section \n'
    }
      if (validPassword == "")
    {
          error+= 'enter your password \n'
    }     

    else if (!(validPassword.match(UpperCaseLetters))&&!(validPassword.match(lowerCaseLetters)))
    {
  
      alert('your password lack uppercase letters and lowercase letters')
     
    }else if (!(validPassword.match(lowerCaseLetters))&&!(validPassword.match(numbers)))
    {
      alert('your password lack lowercase letters and numbers')
    }
    else if(!(validPassword.match(UpperCaseLetters))&&!(validPassword.match(numbers)))
    {
      alert('your password lack upperCase letters and numbers')
    }  else if (!(validPassword.match(UpperCaseLetters)))
    {
      alert('your password lack upperCase')

    }else if (!(validPassword.match(lowerCaseLetters)))
    {
        alert('your password lack LowerCase')
    } else if (!(validPassword.match(numbers)))
    {
      alert('your password numbers')
    } 
    
    if (error !=="")
  {
      alert(error);
     return false 
  }
 
}
    