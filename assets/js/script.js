let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3 ) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "red";
    } else {
        txtNome.innerHTML = "Nome Válido";
        txtNome.style.color = "green";
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "green";
    }
}