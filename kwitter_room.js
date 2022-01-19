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



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter_page.html";
}
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    massage:msg,
    like:0
  });

  document.getElementById("msg").value = "";
}