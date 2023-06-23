let display = document.getElementById("display");
let x = document.querySelectorAll(".btn");

let y = Array.from(x);

y.forEach(function (button) {
  button.addEventListener("click", function () {
    if (this.value == "=") {
      let y = eval(display.value);
      display.value = y;
    } else if (this.value == "AC") {
      display.value = " ";
    } else if (this.value == "DE") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += this.value;
    }
  });
});
