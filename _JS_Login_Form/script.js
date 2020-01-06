
let user ={
    username: 'root',
    password: 'toor'
}

function login(){
    let username = document.getElementById("user").value
    let password = document.getElementById("pass").value
    console.clear();

    let expr = username == user.username && password == user.password;
    console.log(expr);

    expr ? location="https://codepen.io/Kiwitoor" : alert('Invalid');
}