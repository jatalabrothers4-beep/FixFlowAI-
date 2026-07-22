document.addEventListener("DOMContentLoaded", function () {

const bookingData = document.getElementById("bookingData");

const booking = JSON.parse(localStorage.getItem("fixflow_booking"));

if (!bookingData) return;

if (booking) {

bookingData.innerHTML = `
<h3>Latest Booking</h3>

<p><strong>Name:</strong> ${booking.name}</p>

<p><strong>Email:</strong> ${booking.email}</p>

<p><strong>Phone:</strong> ${booking.phone}</p>

<p><strong>Country:</strong> ${booking.country}</p>

<p><strong>Service:</strong> ${booking.service}</p>

<p><strong>Problem:</strong> ${booking.problem}</p>

<p><strong>Status:</strong> ${booking.status}</p>

<p><strong>Date:</strong> ${booking.date}</p>
`;

} else {

bookingData.innerHTML = "<h3>No Booking Available</h3>";

}

});