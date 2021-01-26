function loadIndex() {
    Loginform();
}

function Loginform() {
    var div = document.getElementsByClassName("sectionDiv")[0];

    var creatDiv = document.createElement("div");
    creatDiv.setAttribute("class", "form-container");

    var h1 = document.createElement(h1);
    h1.innerText = "login form";

    var form = document.createElement("form");

    var cortrolDiv = document.createElement("div");
    cortrolDiv.setAttribute("class", "control");

    var label = document.createElement(label);
    label.setAttribute("for", "name");
    label.innerText = "name";

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "name");
    input.setAttribute("id", "name");

    var controldiv = document.createElement("div");
    var creatlabel = document.createElement("label");
    creatlabel.setAttribute("for", "psw");
    creatlabel.innerText = "password";
    var creatInput = document.createElement("input");
    creatInput.setAttribute("type", "password");
    creatInput.setAttribute("name", "psw");
    creatInput.setAttribute("id", "psw");






    div.appendChild(creatDiv);
    creatDiv.appendChild(h1);
    creatDiv.appendChild(form);
    form.appendChild(cortrolDiv);
    cortrolDiv.appendChild(label);
    cortrolDiv.appendChild(input);
    form.appendChild(controldiv);
    controldiv.appendChild(creatlabel);
    controldiv.appendChild(creatInput);



}