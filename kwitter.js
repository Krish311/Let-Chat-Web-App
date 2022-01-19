
// Your web app's Firebase configuration 
const firebaseConfig = { 
  apiKey: "AIzaSyB70dqFXaAuQLqrBRTwM0YPJ6xzspa7a3Y", 
authDomain: "kwitter-14123.firebaseapp.com",
 databaseURL: "https://kwitter-14123-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-14123",
   storageBucket: "kwitter-14123.appspot.com",
    messagingSenderId: "720582293027",
     appId: "1:720582293027:web:390c2024050295b5ece396"
     }; 
     
     // Initialize Firebase 
     firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

