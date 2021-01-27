function loadIndex() {
    Loginform();
}

function Loginform() {
    var div = document.getElementsByClassName("sectionDiv")[0];

    var creatDiv = document.createElement("div");
    creatDiv.setAttribute("class", "form-container");

    var h1 = document.createElement("h1");
    h1.innerText = "login form";

    var form = document.createElement("form");

    var cortrolDiv = document.createElement("div");
    cortrolDiv.setAttribute("class", "control");
' '
    var label = document.createElement(label);
    label.setAttribute("for", "name");
    label.innerText = "name";

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "name");
    input.setAttribute("id", "name");

    var creatcontroldiv = document.createElement("div");
    creatcontroldiv.setAttribute("class", "control");
    var creatlabel = document.createElement("label");
    creatlabel.setAttribute("for", "psw");
    creatlabel.innerText = "password";
    var creatInput = document.createElement("input");
    creatInput.setAttribute("type", "password");
    creatInput.setAttribute("name", "psw");
    creatInput.setAttribute("id", "psw");

    var span = document.createElement("span");
    var spaninput = document.createElement("input");
    spaninput.setAttribute("type", "checkbox");
    spaninput.innerText = "Remember me.";
    var rememberMe = document.createElement("label");
    rememberMe.setAttribute("id","rem");
    rememberMe.innerText = "Remember me.";
    

    var divcontrol = document.createElement("div");
    divcontrol.setAttribute("class", "control");
    var controlinput = document.createElement("input");
    controlinput.setAttribute("type", "submit");
    controlinput.setAttribute("value", "login");

    var linkDiv = document.createElement("div");
    linkDiv.setAttribute("class", "link");
    var link = document.createElement("a");
    link.setAttribute("herf", "#");
    link.innerText = "forgot password ?";





    div.appendChild(creatDiv);
    creatDiv.appendChild(h1);
    creatDiv.appendChild(form);
    form.appendChild(cortrolDiv);
    cortrolDiv.appendChild(label);
    cortrolDiv.appendChild(input);
    form.appendChild(creatcontroldiv);
    creatcontroldiv.appendChild(creatlabel);
    creatcontroldiv.appendChild(creatInput);
    form.appendChild(span);
    span.appendChild(spaninput);
    span.appendChild(rememberMe);
    form.appendChild(divcontrol);
    divcontrol.appendChild(controlinput);
    creatDiv.appendChild(linkDiv);
    linkDiv.appendChild(link);
   


}