
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkaxZILwFh--K0VrkzNW6IyVs2B27AjgQ",
  authDomain: "class-test-f4e43.firebaseapp.com",
  databaseURL: "https://class-test-f4e43-default-rtdb.firebaseio.com",
  projectId: "class-test-f4e43",
  storageBucket: "class-test-f4e43.appspot.com",
  messagingSenderId: "1095468006571",
  appId: "1:1095468006571:web:e55c10e92e479424aa4bee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
