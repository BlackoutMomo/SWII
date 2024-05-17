function Entrar(){
    var resp = document.getElementById("resposta")
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    var usuarios = new Map()

    usuarios.set("usuario", "Sergio")
    usuarios.set("email", "gabriel")
    usuarios.set("senha", "barbosa")

    if (usuarios.has("Sergio")){
        resp.innerHTML("tem esse cadastro")
    }

}