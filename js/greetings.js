const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  h1.textContent = `Hello ${username} !`;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
