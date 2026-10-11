let sunDistance = 149584246.49; 
let moonDistance = 388943.29;    

const sunRate = -0.4893175; 
const moonRate = 0.0038210;  

function formatNumber(num) {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3
  });
}

function updateTelemetry() {
  sunDistance += sunRate;
  moonDistance += moonRate;

  const sunDistElem = document.getElementById('sun-distance');
  const moonDistElem = document.getElementById('moon-distance');
  const sunLightElem = document.getElementById('sun-light');
  const moonLightElem = document.getElementById('moon-light');

  if (sunDistElem) sunDistElem.innerText = formatNumber(sunDistance);
  if (moonDistElem) moonDistElem.innerText = formatNumber(moonDistance);

  if (sunLightElem) {
    const sunLightSeconds = sunDistance / 299792.458;
    const sunMinutes = Math.floor(sunLightSeconds / 60);
    const sunSeconds = (sunLightSeconds % 60).toFixed(2);
    sunLightElem.innerText = `${sunMinutes}m ${sunSeconds}s`;
  }

  if (moonLightElem) {
    const moonLightSeconds = moonDistance / 299792.458;
    moonLightElem.innerText = `${moonLightSeconds.toFixed(3)}s`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(updateTelemetry, 1000);
  updateTelemetry();
});