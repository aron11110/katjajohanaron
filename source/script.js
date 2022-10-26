function posts(json) {
    for (let i=0; i < json.length; i++) {
        
    }
}

window.onload = function() {
    let divs = document.getElementsByTagName("div")
    console.log(divs)

    fetch("https://api.npoint.io/5d82e9be4d319f1563e1")
        .then(res => res.json())
        .then(json => posts(json))
}