///*******ELDERLY MODE******************************/////
function initElderlyMode() {
    const isEnabled = localStorage.getItem("elderlyMode") === "true";
    if (isEnabled) {
        document.body.classList.add("elderly-mode");
    } else {
        document.body.classList.remove("elderly-mode");
    }
}

function toggleElderlyMode(checkState) {
    localStorage.setItem("elderlyMode", checkState);
    if (checkState) {
        document.body.classList.add("elderly-mode");
    } else {
        document.body.classList.remove("elderly-mode");
    }
}

document.addEventListener("DOMContentLoaded", initElderlyMode);

