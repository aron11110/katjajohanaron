function posts(json) {
    let post_div = document.getElementById("posts_div")
    for (let i=0; i < json.length; i++) {
        let post=json[i];
        let div = document.createElement('div');
        let postTime = document.createElement('h3');
        let d = Date(post.time)
        var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
        postTime.innerText = date_format_str
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

window.onload = function() {
    let divs = document.getElementsByTagName("div")
    console.log(divs)
    fetch("./data/data.json")
    // fetch("https://api.npoint.io/5d82e9be4d319f1563e1")
        .then(res => res.json())
        .then(json => posts(json))
}