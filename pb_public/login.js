const pb = new PocketBase("http://127.0.0.1:8090");
let button = document.querySelector("#btn");
let password = document.querySelector("#password");
let username = document.querySelector("#username");



button.addEventListener("click", function (e) {
    login();
  });

async function login(){
var user = username.value;
var pass = password.value;
try{
    const authData = await pb.collection('users').authWithPassword(
        user,
        pass,
    );
} catch (err){
    console.log(err.data);
    alert("Login failed");
    window.location.replace("index.html");

}


}
