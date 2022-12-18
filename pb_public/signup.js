const pb = new PocketBase("http://127.0.0.1:8090");
let button = document.querySelector("#btn");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let username = document.querySelector("#username");


button.addEventListener("click", function (e) {
    createUser();
    console.log("f");
  });

async function createUser(){
  const data = {
    "username": username.value,
    "email": email.value,
    "emailVisibility": true,
    "password": password.value,
    "passwordConfirm": password.value,
};
try{
  const authData = await pb.collection('users').create(data);
} catch (err){
  console.log(err.data);
  alert("Signup failed");
  window.location.replace("signup.html");

}
    
}