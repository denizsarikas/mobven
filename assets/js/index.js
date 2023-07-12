console.log("Hello!")

function copyLink() {
    var linkText = document.getElementById("link-text");
    var copyButton = document.getElementById("copy-button");

    copyButton.innerText = "Copied";
    copyButton.disabled = true;
    copyButton.classList.add("disabled-button");

    // Kopyalanan linki panoya kopyalama işlemi
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", linkText.innerText);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);


    setTimeout(function () {
        copyButton.innerText = "Copy Link";
        copyButton.disabled = false;
        copyButton.classList.remove("disabled-button");
    }, 2000);
}

function updateSelectedValue() {
    var selectElement = document.getElementById("permissions");
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    var valueElement = document.getElementById("selected-value");
    valueElement.textContent = selectedValue;
  }
