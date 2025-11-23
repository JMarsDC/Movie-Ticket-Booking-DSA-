let snackAdded = false;

const priceSpan = document.getElementById("ticket-price");
const basePrice = parseFloat(priceSpan.dataset.basePrice);

document.getElementById("snack-btn").addEventListener("click", () => {
  snackAdded = !snackAdded;

  let finalPrice = basePrice + (snackAdded ? 100 : 0);
  priceSpan.textContent = finalPrice.toFixed(2);

  document.getElementById("snack-btn").textContent =
    snackAdded ? "Remove Snacks (-₱100)" : "Add Snacks? (+₱100)";
});

function storeBooking() {
  const name = document.getElementById("name").value.trim();
  const seat = document.getElementById("seat").value;
  const movieTitle = document.getElementById("movie-title").textContent;

  const cost = parseFloat(priceSpan.textContent);

      if (!name) {
        alert("Please enter your name.");
        return;
      }

      const bookingData = {
        name: name,
        seat: seat,
        movieTitle: movieTitle,
        cost: cost
      };

      // Send to backend
      fetch("http://localhost:5501/api/storeBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
      })
      .then(response => response.text())
      .then(result => alert(result))
      .catch(error => console.error("Error:", error));
    }