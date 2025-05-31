document.addEventListener("DOMContentLoaded", () => {
  const temperature = 31; // °C
  const windSpeed = 7;    // km/h

  const windChillRow = document.createElement("tr");
  windChillRow.innerHTML = `
    <td class="label"><b>Wind Chill:</b></td>
    <td>${getWindChillDisplay(temperature, windSpeed)}</td>
  `;

  document.querySelector(".weather table").appendChild(windChillRow);

  // Footer info
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last update: ${document.lastModified}`;
});

// Helpers
function getWindChillDisplay(temp, wind) {
  return isWindChillApplicable(temp, wind)
    ? `${calculateWindChill(temp, wind).toFixed(2)} °C`
    : "N/A";
}

function isWindChillApplicable(temp, wind) {
  return temp <= 10 && wind > 4.8;
}

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  );
}
