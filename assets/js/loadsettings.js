function getSettingValue(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
}

function doesSettingExist(key) {
    return localStorage.getItem(key) !== null;
}

if (getSettingValue("gatekeep") === "true") {
    document.body.innerHTML = document.body.innerHTML.replace(/Z-Kit/g, 'uuhhhhh');
    document.querySelectorAll('img[src="assets/logo.png"]').forEach(img => {
        img.style.display = 'none';
    });
}

if (getSettingValue("particles-toggle") === "true") {
    const particlesDiv = document.getElementById('particles-js');
    if (particlesDiv) {
        particlesDiv.style.display = 'none';
    }
}

if (doesSettingExist("panic-keybind")) {
    if (!doesSettingExist("custom-url")) {
        localStorage.setItem("custom-url", "google.com?igu=1");
    }
    
    const panicKeybind = JSON.parse(getSettingValue("panic-keybind", "[]"));
    const pressedKeys = new Set();

    window.addEventListener("keydown", (event) => {
        pressedKeys.add(event.key);
        if (panicKeybind.every(key => pressedKeys.has(key))) {
            const customUrl = getSettingValue("custom-url");
            window.location.href = "https://" + customUrl;
        }
    });

    window.addEventListener("keyup", (event) => {
        pressedKeys.delete(event.key);
    });
}
