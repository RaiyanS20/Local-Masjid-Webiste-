// Function to update the clock every second
function updateClock() {
    const clockElement = document.getElementById("current-time");

    // Get current time and format it
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Set the time in HH:MM:SS format
    clockElement.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

// Update the clock immediately and set an interval to update every second
updateClock();
setInterval(updateClock, 1000);
