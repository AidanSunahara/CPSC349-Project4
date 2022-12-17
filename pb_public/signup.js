const pb = new PocketBase("http://127.0.0.1:8090");
let btn = document.querySelector("#btn");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let username = document.querySelector("#username");


btn.addEventListener("click", function (e) {
    let emailText = email.value;
    let userNameText = username.value;
    let passText = password.value;
    createUser();
  });

async function createUser(){
  const data = {
    username: username.value,
    email: email.value,
    emailVisibility: true,
    password: password.value,
    field: "test"
};
    const authData = await pb.collection('users').create(data);
}
