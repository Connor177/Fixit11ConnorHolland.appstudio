var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
let allExercises = exercises.concat(coreExercises)

favExercises.onshow=function(){
  for (i = 0; i < allExercises.length; i++) {
    selExercises.addItem(allExercises[i])
    }
}

selExercises.onfocusout=function(){
let message = "You chose "
let choices = " "
for (i = 0; i < selExercises.text.length; i++) {
  choices = choices + selExercises.text[i]
  }
  NSB.MsgBox(message + choices)

}



Button2.onclick=function(){
  ChangeForm(mobileNav)
}
