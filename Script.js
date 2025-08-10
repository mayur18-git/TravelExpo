 document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("countrySelect");
  if (countrySelect) {
    countrySelect.addEventListener("change", showCountryRecommendations);
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("formStatus").textContent = "Thank you! Your message has been received.";
      contactForm.reset();
    });
  }
});

function showCountryRecommendations() {
  const country = document.getElementById("countrySelect").value;
  const results = document.getElementById("countryResults");

  if (country === "japan") {
    results.innerHTML = `
      <div class="card">
        <img src="mountfoji.jpeg" alt="Mount Fuji">
        <p>Mount Fuji</p>
      </div>
      <div class="card">
        <img src="kyoto.jpeg" alt="Kyoto Temples">
        <p>Kyoto Temples</p>
      </div>
    `;
  } else if (country === "maldives") {
    results.innerHTML = `
      <div class="card">
        <img src="maldives1.jpg" alt="Crystal Blue Beaches">
        <p>Crystal Blue Beaches</p>
      </div>
      <div class="card">
        <img src="maldives2.jpg" alt="Overwater Villas">
        <p>Overwater Villas</p>
      </div>
    `;
  } else {
    results.innerHTML = "";
  }
}
