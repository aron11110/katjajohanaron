function posts(json) {
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
        postPicture.width = '300';
        postPicture.height = '300';
        div.appendChild(postAuthor);
        div.appendChild(postTime);
        div.appendChild(postText);
        div.appendChild(postPicture);
        document.author.appendChild(div);
        if(i%2==0){
            div.style.backgroundColor='#F0FFFF'
        }
        else{
            div.style.backgroundColor='#FF7F50'
        }
    }
}

window.onload = function() {
    let divs = document.getElementsByTagName("div")
    console.log(divs)

    fetch()
}