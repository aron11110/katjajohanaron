let userInfo={name:'Driscoll Jaquelyn', email:'Driscoll.Jaquelyn@mail.mail'}
let popup = function(){
    let photoParent = document.getElementById('profile')
    console.log(photoParent)
    let infoText = ''
    infoText += userInfo.name + '\n' + userInfo.email + '\nlogout'
    let info = document.createTextNode(infoText)
    let photo = document.getElementById('profileInfo')
    photo.appendChild(info)
    photoParent.onclick = function(){
        console.log('yes')
        if (photo.style.display === "none") {
            photo.style.display = "block";
          } else {
            photo.style.display = "none";
          }
        console.log(photo.style.visibility)
    }
}



