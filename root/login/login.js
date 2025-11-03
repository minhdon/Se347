const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");
const passwordLog = document.getElementById("passwordLog");

eyeSlash.addEventListener("click", () => {
  eye.classList.add("unhidden");
  eyeSlash.classList.add("hidden");
  if (passwordLog.type === "password") {
    passwordLog.type = "text";
  }
});

eye.addEventListener("click", () => {
  eye.classList.remove("unhidden");
  eyeSlash.classList.remove("hidden");
  if (passwordLog.type === "text") {
    passwordLog.type = "password";
  }
});

const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const registerBox = document.getElementById("register-box");
const loginBox = document.getElementById("login-box");
registerLink.addEventListener("click", (event) => {
  event.preventDefault();
  registerBox.classList.add("unhidden");
  loginBox.classList.add("hidden");
});
loginLink.addEventListener("click", (event) => {
  event.preventDefault();
  registerBox.classList.remove("unhidden");
  loginBox.classList.remove("hidden");
});
