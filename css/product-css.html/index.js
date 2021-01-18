var articleData = {
    "user": {
        "username": "",
        "logo_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2oyMaQjqdXaedui9MDywun_UmZlPte0pGw&usqp=CAU",
        "logo_bio": "Emily Stubbs In Fitness And In Healty",
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here's What Happened",
        "subtitle": "I felt invincible",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwZ2AmXcwAriD5G77QHxuFvxqJV6YZ_sCWg&usqp=CAU",
        "time": "Nov 21  .  9 min read",
    }
};

function loadIndex() {
    creatFunction(articleData);
    responsData(creatFunction());
}
//-----------------------------------------//
function responsData() {
    var url = "http://localhost:3000";
    fetch(url)
        .then(response => response.json())
        .then(data => responsData(data[0]));
}

function creatFunction(data) {
    var leftDiv = document.getElementsByClassName("left-div")[0];
    var itemDiv = createDiv("item-div");
    var itenInnerleftDiv = createDiv("item-inner-left-div");
    var iteminnerDiv = createDiv("item-inner-div");
    var img = document.createElement("img");
    img.setAttribute("src", data.user.logo_pic);
    var h4 = document.createElement("h4");
    h4.innerText = "";
    h4.innerText = data.user.logo_bio;
    var h2 = document.createElement("h2");
    h2.innerText = data.post.title;
    var h3 = document.createElement("h3");
    h3.innerText = data.post.subtitle;
    var span = document.createElement("span");
    span.innerText = data.post.time;
    var itemInnerLeftImgDiv = createDiv("item-inner-left-img-div");
    var imgLeftDiv = document.createElement("img");
    imgLeftDiv.setAttribute("src", data.post.img);



    leftDiv.appendChild(itemDiv);
    itemDiv.appendChild(itenInnerleftDiv);
    itenInnerleftDiv.appendChild(iteminnerDiv);
    iteminnerDiv.appendChild(img);
    iteminnerDiv.appendChild(h4);
    itenInnerleftDiv.appendChild(h2);
    itenInnerleftDiv.appendChild(h3);
    itenInnerleftDiv.appendChild(span);
    itemDiv.appendChild(itemInnerLeftImgDiv);
    itemDiv.appendChild(imgLeftDiv);

}





function createDiv(className) {
    var div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
}