function posts(json) {
    let post_div = document.getElementById("posts_div")
    for (let i=0; i < json.length; i++) {
        let post=json[i];
        let div = document.createElement('div');
        let postTime = document.createElement('h3');
        postTime.innerText = post.time;
        let postAuthor = document.createElement('p');
        postAuthor.innerText = post.author;
        let postText = document.createElement('p');
        postText.innerText = post.text;
        let postPicture = document.createElement('img');
        postPicture.id= 'postedPost'
        // postPicture.src = "media/postMedia/img1.jpeg";
        postPicture.src = post.picture
        postPicture.width = '200';
        postPicture.height = '200';
        div.appendChild(postAuthor);
        div.appendChild(postTime);
        div.appendChild(postText);
        div.appendChild(postPicture);
        
        if(i%2==0){
            div.style.backgroundColor='#F0FFFF'
        }
        else{
            div.style.backgroundColor='#FF7F50'
        }
        post_div.appendChild(div);
    }
}

function popup(){
    let userInfo={name:'Driscoll Jaquelyn', email:'Driscoll.Jaquelyn@mail.mail'}
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


window.onload = function() {
    popup()
    let divs = document.getElementsByTagName("div")
    console.log(divs)
    fetch("./data/data.json")
    // fetch("https://api.npoint.io/5d82e9be4d319f1563e1")
        .then(res => res.json())
        .then(json => posts(json))
}
