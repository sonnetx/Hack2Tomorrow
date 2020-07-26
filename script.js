function checkPasswordStrength(password){
  let points =0;
  //checks length of password
  if(password.length==8){
    points++;
  }else if(password.length>8){
    points +=2;
  }
  else{
    points += 0;
  }


  for(let i=0;i<password.length;i++){
    if(password.charAt(i)>='0' && password.charAt(i)<='9'){ //checks if numbers
      points++;
    }else if(password.charAt(i)>='A' && password.charAt(i)<='Z'){ //checks if uppercase
      points++;
    } else{ 
      points+=0.5;
    }
  //need to check for special characters
  }
  if(points<25){
    points = points/2;
  }
  var days = points * 4.5;
  //points times five is the number of days until changing
  document.getElementById("days").innerHTML =("Days:"+days);
}

function accessPassword(){
  var password = document.getElementById("pass").value;
  checkPasswordStrength(password);
}

