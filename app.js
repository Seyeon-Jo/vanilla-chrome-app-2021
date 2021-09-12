// const loginForm = document.getElementById("login-form");
// // querySelector을 사용 할 때는 대상이 id인지 명확히 해줘야 함 why? querySelector은 className tagName 전부 search 가능하니까 => querySelector("#login-form")
// // BUT getElementById는 그럴 필요가 없음

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log(loginInput.value);
  console.log("click");
}

loginButton.addEventListener("click", onLoginBtnClick);
