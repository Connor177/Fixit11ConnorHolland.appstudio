



btnLogin.onclick=function(){
   req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) { //everything worked.
    let response = req1.responseText
        if (response == 1) {
         ChangeForm(favFoods)
      } else {
        NSB.MsgBox("Illegal Login")
        }
        
    } else {
      
    }
}



btnFavFoods.onclick=function(){
  ChangeForm(favFoods)
}
