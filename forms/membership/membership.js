let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


/*        

inputItem.onimput=function(){
wList.push(item[wishList])
wList.push(price[wishList])
}

    } else {
    members.push(inptName.value)
    lblMember.textContent= "You are not a member."
*/

btnMessage.onclick=function(){
    if (members.includes(inptName.value)) {
    lblName.textContent = "You are a member."
    } else {
    members.push(inptName.value)
    lblName.textContent = "You are a member."
    }
}
    



