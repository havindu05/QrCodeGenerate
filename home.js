let generateBtn = document.getElementById("generate-btn");
let downloadBtn = document.getElementById("download-btn");
let clearBtn = document.getElementById("clear-btn");
let qrContainer = document.getElementById("qrcode");
let textInput = document.getElementById("text-input");
let errorMsg = document.getElementById("error-msg");

let qrCode;

generateBtn.addEventListener("click", () => {
    let text = textInput.value.trim();

    if (text === "") {
        errorMsg.innerText = "Please enter text or URL!";
        return;
    }

    errorMsg.innerText = "";
    qrContainer.innerHTML = "";

    qrCode = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", () => {
    let img = qrContainer.querySelector("img");
    if (!img) return;

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "Unity_Qr_Gen.png";
    link.click();
});

clearBtn.addEventListener("click", () => {
    textInput.value = "";
    qrContainer.innerHTML = "";
    downloadBtn.style.display = "none";
    errorMsg.innerText = "";
});
