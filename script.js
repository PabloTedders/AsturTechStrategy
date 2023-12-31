document.addEventListener('DOMContentLoaded', function () {
    updateTime();
    updateLocation();
    setInterval(updateTime, 1000); // Update time every second
});

function updateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toDateString();
    datetimeElement.textContent = `${timeString} - ${dateString}`;
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const locationElement = document.getElementById('location');
                const { latitude, longitude } = position.coords;
                locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            },
            function (error) {
                console.error('Error getting location:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}
