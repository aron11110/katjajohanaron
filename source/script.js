function posts(json) {
    let post_div = document.getElementById("posts_div")
    for (let i=0; i < json.length; i++) {
        let post=json[i];

        let article = document.createElement('article')

        let header = document.createElement('header')
        let span1 = document.createElement('span')
        let posterPhoto = document.createElement('img')
        posterPhoto.src = './media/profileMedia/poster1.jpg'
        posterPhoto.width = '30';
        posterPhoto.height = '30';
        let span2 = document.createElement('span')
        let span3 = document.createElement('span')
        let span4 = document.createElement('span')
        span4.id = 'posterSpan'
        let div = document.createElement('div');
        let postTime = document.createElement('h5');
        postTime.innerText = datetime(post.time);
        let postAuthor = document.createElement('h5');
        postAuthor.innerText = post.author;

        span1.appendChild(posterPhoto)
        span2.appendChild(postAuthor)
        span3.appendChild(postTime)
        span4.appendChild(span1)
        span4.appendChild(span2)


        header.appendChild(span4)
        header.appendChild(span3)

        let postImage = document.createElement('div')
        postImage.className = 'postImage'

        let textPart = document.createElement('div')
        textPart.className = 'postText'

        let postText = document.createElement('p');
        postText.innerText = post.text;
        textPart.appendChild(postText)
        let postPicture = document.createElement('img');
        postPicture.id= 'postedPost'
        postPicture.src = post.picture
        postPicture.width = '200';
        postPicture.height = '200';
        article.appendChild(header);
        postImage.appendChild(postPicture);
        article.appendChild(postImage)
        article.appendChild(textPart)
        
        if(i%2==0){
            div.style.backgroundColor='#F0FFFF'
        }
        else{
            div.style.backgroundColor='#FF7F50'
        }
        post_div.appendChild(article);
    }
}

function popup(){
    let userInfo={name:'Driscoll Jaquelyn', email:'Driscoll.Jaquelyn@mail.mail'}
    let photoParent = document.getElementById('profile')
    let infoText = ''
    infoText += userInfo.name + '\n' + userInfo.email + '\nlogout'
    let info = document.createTextNode(infoText)
    let photo = document.getElementById('profileInfo')
    photo.appendChild(info)
    photoParent.onclick = function(){
        if (photo.style.display === "none") {
            photo.style.display = "block";
          } else {
            photo.style.display = "none";
          }
    }
}

function datetime(universal) {
    let time = new Date(universal)
    const format = new Intl.DateTimeFormat("et-EE")
    return format.format(time)
}


window.onload = function() {
    popup()
    let divs = document.getElementsByTagName("div")
    fetch("./data/data.json")
    // fetch("https://api.npoint.io/5d82e9be4d319f1563e1")
        .then(res => res.json())
        .then(json => posts(json))
}
