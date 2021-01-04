//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAiUC-uQpKTo8DEXwq4l4gfjjyy4lmNeUQ",
      authDomain: "classtest-fad9c.firebaseapp.com",
      projectId: "classtest-fad9c",
      storageBucket: "classtest-fad9c.appspot.com",
      messagingSenderId: "142368607544",
      appId: "1:142368607544:web:289dbea40f3f1e07cdc5cd"
    };
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
