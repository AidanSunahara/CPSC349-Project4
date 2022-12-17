

let btn = document.querySelector("button");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let username = document.querySelector("#username");
const pb = new PocketBase("http://127.0.0.1:8090");


btn.addEventListener("click", function (e) { 
    createUser();
 
  });
async function createUser(){
  const data = {
    "username": username.value,
    "email": email.value,
    "emailVisibility": true,
    "password": password.value,
    "field": "test"
};
    const record = await pb.collection('users').create(data);
}