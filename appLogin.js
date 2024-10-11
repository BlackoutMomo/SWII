// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js";
// import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// import {getFirestore,setDoc, doc} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"
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
    measurementId: "G-JWNQYLC70S",
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  var resposta = document.getElementById("resposta").innerHTML;
  
  var respostaCor = document.getElementById("resposta").style.color;
  // Manipulação do formulário de login
  function Entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    console.log(email);
    console.log(senha);
  
    auth
      .signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        // Login bem-sucedido
        const user = userCredential.user;
        document.getElementById("resposta").style.color = "green";
        document.getElementById("resposta").innerHTML =
          "Cadastro feito";
  
        // Redirecionar ou mostrar conteúdo para usuário autenticado
      })
      .catch((error) => {
        // Exibe mensagem de erro
        const errorCode = error.code;
        const errorMessage = error.message;
  
        document.getElementById("resposta").style.color = "red";
        document.getElementById("resposta").innerHTML = errorMessage;
        alert("Erro: " + errorMessage);
      });


  }
  
  
  