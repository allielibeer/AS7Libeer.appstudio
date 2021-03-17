let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]



btnMessage.onclick=function(){
    if (members.includes(inptName.value)) {
    lblName.textContent = "You are a member."
    } else {
    members.push(inptName.value)
    lblName.textContent = "You are a member."
    }
}
    



