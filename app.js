function Entrar(){
    var resp = document.getElementById("resposta")
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    var usuarios = new Map()

    usuarios.set("usuario", "Sergio")
    usuarios.set("email", "gabriel")
    usuarios.set("senha", "barbosa")

    if (usuarios.has("Sergio") == true){
        resp.innerHTML("tem esse cadastro")
    }

}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeQj2nE0XxrYu4qvNACectts5Et2eF-Hg",
  authDomain: "blackoutmomo-f01c9.firebaseapp.com",
  databaseURL: "https://blackoutmomo-f01c9-default-rtdb.firebaseio.com",
  projectId: "blackoutmomo-f01c9",
  storageBucket: "blackoutmomo-f01c9.appspot.com",
  messagingSenderId: "97189801897",
  appId: "1:97189801897:web:2a4f1b3237cbdf3a7b1eb8",
  measurementId: "G-JWNQYLC70S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

// Manipulação do formulário de login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
   
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    auth.signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // Login bem-sucedido
            const user = userCredential.user;
            alert('Login realizado com sucesso!');
            // Redirecionar ou mostrar conteúdo para usuário autenticado
        })
        .catch((error) => {
            // Exibe mensagem de erro
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Erro: ' + errorMessage);
        });
});
