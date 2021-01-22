function loadIndex() {
    LoginForm();
}



function LoginForm() {
    var div = document.getElementsByClassName("loginbox")[0];

    var avator = document.createElement("img");
    avator.setAttribute("class", "avatar");
    avator.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1I10m3DSqbPRLB01qyAF41xuuQXboajkzA&usqp=CAU");

    var h1 = document.createElement("h1");
    h1.innerText = "Login Here";

    var form = document.createElement("form");

    var createElementP = document.createElement("p");
    createElementP.innerText = "username";

    var usernameText = document.createElement("input");
    usernameText.setAttribute("type", "text");
    usernameText.setAttribute("placeholder", "Enter username");
    usernameText.setAttribute("name", "");
    usernameText.setAttribute("name", "");

    var creatP = document.createElement("p");
    creatP.innerText = "password";

    var password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("placeholder", "Enter password");
    password.setAttribute("name", "");

    var Login = document.createElement("input");
    Login.setAttribute("type", "submit");
    Login.setAttribute("name", "");
    Login.setAttribute("value", "login");

    var forgotPasswordLink = document.createElement("a");
    forgotPasswordLink.setAttribute("href", "#");
    forgotPasswordLink.innerText = " Lost your password ?";

    var br = document.createElement("br");

    var newAccountLink = document.createElement("a");
    newAccountLink.setAttribute("href", "#");
    newAccountLink.innerText = "don't hava an account?";

    div.appendChild(avator);
    div.appendChild(h1);
    div.appendChild(form);
    form.appendChild(createElementP);
    form.appendChild(usernameText);
    form.appendChild(creatP);
    form.appendChild(password);
    form.appendChild(Login)
    form.appendChild(forgotPasswordLink);
    form.appendChild(br);
    form.appendChild(newAccountLink);

}