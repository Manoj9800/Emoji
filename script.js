// Timer script
let countdownDate = new Date("February 05, 2025 22:00:00").getTime();

let timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
        document.getElementById("timer").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        clearInterval(timer);
        document.querySelector(".countdown-container").innerHTML = `
            <div class="button-container">
                <a href="#buy" class="btn action-btn">Buy Now</a>
                <a href="#chart" class="btn action-btn">Chart</a>
            </div>`;
    }
}, 1000);