const userNameTag = document.getElementById("userName");
const saveUserNameBtn = document.getElementsByClassName("btn")[0];

saveUserNameBtn.addEventListener("click", function () {
  const userNameContent = userNameTag.value;
  if (userNameContent !== "") {
    localStorage.setItem("username-content", userNameContent);
  }
});

const deleteValueBtn = document.getElementsByClassName("btn")[1];

deleteValueBtn.addEventListener("click", function () {
  if (localStorage.getItem("username-content") !== "") {
    localStorage.removeItem("username-content");
    userNameTag.value = "";
  }
});

const printCurrentUsername = function () {
  const savedUsername = localStorage.getItem("username-content");
  if (savedUsername !== "") {
    userNameTag.value = savedUsername;
  }
};

window.addEventListener("load", printCurrentUsername);
window.onload = function () {
  let time = parseInt(sessionStorage.getItem("timer"), 10) || 0;

  setInterval(function () {
    time++;
    sessionStorage.setItem("timer", time);
    document.getElementById("timer").textContent = time;
  }, 1000);
};
