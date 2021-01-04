function addUser(){
    user_name=document.getElementById("user_name").nodeValue;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html"
}
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}
function logout(){
    localStorage.removeItem("user_name");
    window.location="kwitter.html"
}