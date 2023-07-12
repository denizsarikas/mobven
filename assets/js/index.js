console.log("Hello!")

function copyLink() {
    var linkText = document.getElementById("link-text");
    var copyButton = document.getElementById("copy-button");

    // Kopyalanan linki kullanıcıya bildirme
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

    // Belirli bir süre sonra butonu eski haline getirme
    setTimeout(function () {
        copyButton.innerText = "Copy Link";
        copyButton.disabled = false;
        copyButton.classList.remove("disabled-button");
    }, 2000);
}
