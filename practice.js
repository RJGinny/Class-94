
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBRFyFO0tWvsrO1PbHXGIuUF3fIzQ2UHho",
    authDomain: "kwitter-app-cdc3e.firebaseapp.com",
    databaseURL: "https://kwitter-app-cdc3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-cdc3e",
    storageBucket: "kwitter-app-cdc3e.appspot.com",
    messagingSenderId: "1059013549399",
    appId: "1:1059013549399:web:db683620ab99bda934f212"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      })
  }