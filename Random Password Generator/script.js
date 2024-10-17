document.addEventListener('DOMContentLoaded', function() {
    const passwordDisplay = document.getElementById('passwordDisplay');
    const lengthSlider = document.getElementById('lengthSlider');
    const sliderValue = document.getElementById('sliderValue');
    const generateButton = document.getElementById('generateButton');
    const copyButton = document.getElementById('copyButton');

   lengthSlider.oninput = function() {
        sliderValue.textContent = this.value;
    }

    generateButton.addEventListener('click', function() {
        generatePassword();
    });

    copyButton.addEventListener('click', function() {
        copyPassword();
    });

    function generatePassword() {
        console.log("Generate Password function called.");
        const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        const length = parseInt(lengthSlider.value);

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        passwordDisplay.textContent = password;
    }

    function copyPassword() {
        const textarea = document.createElement("textarea");
        textarea.value = passwordDisplay.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Password copied to clipboard!");
    }
});