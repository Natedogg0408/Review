var firebaseConfig = {
    apiKey: "AIzaSyAPrfLDK5dzS76nAdu1zynsHOIA9_DdvIM",
    authDomain: "enter-your-project-name-16e4e.firebaseapp.com",
    databaseURL: "https://enter-your-project-name-16e4e-default-rtdb.firebaseio.com",
    projectId: "enter-your-project-name-16e4e",
    storageBucket: "enter-your-project-name-16e4e.appspot.com",
    messagingSenderId: "512759762934",
    appId: "1:512759762934:web:ad25140899696c554581d7",
    measurementId: "G-39V7LDPZD5"
  };
      // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
document.getElementsById("namedisplay").innerHTML = "Welcome " + user_name + "!";

function logout(){
    window.location = "index.html";
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
console.log("Room name = " + Room_names );
row =" <div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' > "+ Room_names + "</div><hr> "
document.getElementById("output").innerHTML += row; 
 });});}
getData();

function addRoom(){
 room_name = document.getElementById("room_name").value; 

 firebase.database().ref("/").child(room_name).update({
purpose : "adding room name "
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name); 
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}





console.log("I CAN'T FIGURE OUT WHY IT DOESN'T WORK RIGHT. IT WAS WORKING FINE, THEN I'M NOT SURE WHAT I DID AND NOW IT DOESN'T")
















