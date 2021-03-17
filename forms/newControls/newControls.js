
HMBRleft.onclick=function(s1){
  if(typeof(s1) == "object") {
    return
  } else {
      switch(s1) {
        case "Calculator":
            HMBRleft.hide()
            ChangeForm(calculator)
            break
        case "Membership":
            HMBRleft.hide()
            ChangeForm(membership)
            break
      }
  }  
}


chkList.onchange = function() {
  NSB.MsgBox("You got this item");
}



swchComplete.onclick=function(){
  alert("You completed the shopping list!")
  lblComplete.textContent = 'List complete'
}


calInpt.onvalueChanged = function(e) {
  NSB.MsgBox("New date is "  +  e.args.date);
  lblDate.textContent =("Go to the store on" + e.args.date);
}

