const unlocker = document.querySelector(".unlocker");
const swipe_down = document.querySelector(".swipe_down");
const surface = document.querySelector(".surface");
const unlock = document.querySelector(".unlock");
const swipe_up = document.querySelector(".swipe_up");
const time = document.querySelector(".time");
const month = document.querySelector(".month");

let date = new Date();

time.textContent = `${date.getHours()}:${date.getMinutes()}`;
month.textContent =`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

unlocker.addEventListener("input", () => {
  if (unlocker.value.length == "2" && unlocker.value == date.getMinutes()) {
    location.href = "./phone.html";
  } else if (
    unlocker.value.length == "2" &&
    unlocker.value !== date.getMinutes()
  ) {
    unlocker.classList.add("animated");
  }
});

swipe_up.addEventListener("click", function () {
  unlock.classList.add("dn");
  surface.classList.add("db");
  unlock.classList.remove("db");
  surface.classList.remove("dn");
});

swipe_down.addEventListener("click", function () {
  surface.classList.add("dn");
  unlock.classList.add("db");
  surface.classList.remove("db");
  unlock.classList.remove("dn");
});
