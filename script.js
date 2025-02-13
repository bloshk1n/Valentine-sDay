document.addEventListener("DOMContentLoaded", function () {
    let attempts = 0;
    let passwordField = document.getElementById('password');
    let hint = document.getElementById('hint');

    window.enterDigit = function (digit) {
        passwordField.value += digit;
    };

    window.clearPassword = function () {
        passwordField.value = "";
    };

    window.checkPassword = function () {
        if (passwordField.value === "171222") {
            nextPage(2);
            startTimer();
        } else {
            attempts++;
            passwordField.value = "";
            if (attempts >= 2) {
                hint.style.display = "block";
            }
        }
    };

    window.nextPage = function (pageNumber) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(`page${pageNumber}`).classList.add('active');
    };

    function startTimer() {
        const startDate = new Date("2022-12-17T00:00:00");
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            const now = new Date();
            const diff = now - startDate;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            timerElement.innerHTML = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    function createPulsingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('pulsing-heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        document.body.appendChild(heart);
    }

    setInterval(createHeart, 300);
    for (let i = 0; i < 10; i++) {
        createPulsingHeart();
    }
});
