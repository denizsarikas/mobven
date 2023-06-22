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
