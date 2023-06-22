const checkboxOption = document.querySelector("#checkbox-option");
const unVisible = document.querySelectorAll(".-unvisible");

checkboxOption.addEventListener("change", (e) => {
  e.preventDefault();
  for (let i = 0; i < unVisible.length; i++) {
    let visib = unVisible[i].style.display;
    if (visib === "block") {
      unVisible[i].style.display = "none";
    } else {
      unVisible[i].style.display = "block";
    }
  }
});

const pickUpDate = document.getElementById("pickDate");
pickUpDate.addEventListener("change", (e) => {
  e.preventDefault();
  document.getElementById("pickUpData").innerText = moment(e.target.value).format('ddd D MMMM YYYY');
});


