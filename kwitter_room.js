
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAiUC-uQpKTo8DEXwq4l4gfjjyy4lmNeUQ",
      authDomain: "classtest-fad9c.firebaseapp.com",
      projectId: "classtest-fad9c",
      storageBucket: "classtest-fad9c.appspot.com",
      messagingSenderId: "142368607544",
      appId: "1:142368607544:web:289dbea40f3f1e07cdc5cd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";

      //End code
      });});}
getData();
function addUser(){
      user_name=documet.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}
document.getElementById("user_name").innerHTML="welcome"+"!";
function.addroom()
{room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name",rooom_name);
window.location="kwitter_page.html"}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",rooom_name);
window.location="kwitter_page.html"}
}