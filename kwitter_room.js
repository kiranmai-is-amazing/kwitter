
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDRZlV_OBgzoGn1_GHCTnZcV2WGabtysks",
      authDomain: "kwitter-dc20f.firebaseapp.com",
      databaseURL: "https://kwitter-dc20f-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc20f",
      storageBucket: "kwitter-dc20f.appspot.com",
      messagingSenderId: "422705252005",
      appId: "1:422705252005:web:de7a34c87b47fff9526f4c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"

function addroom(){
      room_name=document.getElementById("room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_roomname"
      })

      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row
      //End code
      });});}
getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"

}
function logout()
{
     localStorage.removeItem("user_name") 
     localStorage.removeItem("room_name")
     window.location="index.html"
}