const modul = document.querySelector(".modul");
const modul_body = document.querySelector(".modul_body");
const closer = document.querySelector(".closer");
const houre = document.querySelector(".houre");
const tepa = document.querySelector(".tepa");

closer.addEventListener("click", (e) => {
  modul.classList.add("dn");
  modul.classList.remove("db");
  e.preventDefault();
});

// Calc

const calc = document.querySelector(".calc_opener");

calc.addEventListener("click", () => {
  modul.classList.add("db");
  modul.classList.remove("dn");
  modul_body.innerHTML = `
  <form name="calculator" >
 <input type="textfield" name="ans" value="">
    <br />
<div class="grid-calc">
    <input class="number" type="button" value="1" onClick="document.calculator.ans.value+='1'">
<input class="number" type="button" value="2" onClick="document.calculator.ans.value+='2'">
<input class="number" type="button" value="3" onClick="document.calculator.ans.value+='3'"><br>
<input class="number" type="button" value="4" onClick="document.calculator.ans.value+='4'">
<input class="number" type="button" value="5" onClick="document.calculator.ans.value+='5'">
<input class="number" type="button" value="6" onClick="document.calculator.ans.value+='6'">
<input class="number" type="button" value="7" onClick="document.calculator.ans.value+='7'"><br>
<input class="number" type="button" value="8" onClick="document.calculator.ans.value+='8'">
<input class="number" type="button" value="9" onClick="document.calculator.ans.value+='9'">
<input class="number" type="button" value="-" onClick="document.calculator.ans.value+='-'">
<input class="number" type="button" value="+" onClick="document.calculator.ans.value+='+'"><br>
<input class="number" type="button" value="*" onClick="document.calculator.ans.value+='*'">
<input class="number" type="button" value="/" onClick="document.calculator.ans.value+='/'">
<input class="number" type="button" value="0" onClick="document.calculator.ans.value+='0'">
<input class="number" type="reset" value="Reset">
<input class="number" type="button" value="=" onClick="document.calculator.ans.value=eval(document.calculator.ans.value)">
</div>
</form>

  `;
});

let date = new Date();
houre.textContent = `${date.getHours()}:${date.getMinutes()}`;

navigator.getBattery().then((battery) => {
  let percentage = document.querySelector(".batary");

  function updateAllBatteryInfo() {
    updateLavelInfo();
  }
  setInterval(() => {
    updateAllBatteryInfo();
  }, 3);

  function updateLavelInfo() {
    percentage.style.width = battery.level * 100 + "%";
    percentage.textContent = battery.level * 100;
  }
});

// timer

const back_timer = document.querySelector(".back-timer")
const timer = document.querySelector(".timer")


back_timer.addEventListener("click", (e) => {
    timer.classList.add("dn");
    timer.classList.add("db")
    timer.classList.remove("db");
    timer.classList.remove("dn");
    e.preventDefault();
  });

// number

const number_1 = document.querySelector(".number_1")
number.textContent = `${date.getHours()}:${date.getMinutes()}`;