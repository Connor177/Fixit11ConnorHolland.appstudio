

let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
 //lstFoods.value = " "
  for (i = 0; i < goodFoods.length; i++) {
    lstFoods.addItem(goodFoods[i])
    }
}

lstFoods.onclick=function(choice){
if (typeof(choice) == "object") {
return
} else {
NSB.MsgBox("You picked " + goodFoods[choice] + " - " + " thats a great choice!")
}
}




btnDessertVoting.onclick=function(){
  ChangeForm(dessertVoting)
}
