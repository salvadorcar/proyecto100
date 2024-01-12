// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ


var firebaseConfig ={
    apiKe: "AIzaSyAk_gg7lHoMJdVli="
}

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
       
        var firebaseConfig= {

        apiKey: "AIzaSyAK_gg7LHoMoJdVlisKbiUdJ35idJDg-P9s",
        authDomain : "social-e5855.firebaseapp.com",
        datavasseURL : "https://social-e5855-default-rtdb.firebaseio.com",
        proyectId : "social-e5855"
        storageBuket : "social-e5855.appspot.com",
        messagingSenderId: "671543009162",
        appId: "1:671543009162:web:a881fdddf02bf05c08b273",


}});
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



