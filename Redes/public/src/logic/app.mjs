import { InitCardIp } from "../Components/CardIp/CardIp.mjs";
InitCardIp();

const ipInput = document.getElementById("ipInput");
const maskInput = document.getElementById("maskInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultArea = document.getElementById("resultArea");
const networks = {};

calculateBtn.addEventListener("click", function () {
  const ip = ipInput.value.trim();
  const mask = maskInput.value.trim();

  if (!isValidIP(ip) || !isValidIP(mask)) {
    alert("Por favor, ingresa una dirección IP y máscara válidas.");
    return;
  }

  const networkAddress = calculateNetworkAddress(ip, mask);
  const originalIp = ip;
  if (!networks[networkAddress]) {
    networks[networkAddress] = [originalIp];
  } else {
    if (!networks[networkAddress].includes(originalIp)) {
      networks[networkAddress].push(originalIp);
    }
  }
  resultArea.innerHTML = "";

  let colorToggle = false;
  for (const network in networks) {
    const networkDiv = document.createElement("div");
    networkDiv.className = "network-block";

    const networkHeader = document.createElement("div");
    networkHeader.className =
      "network-header" + (colorToggle ? " alternate-network" : "");
    networkHeader.textContent = network;
    networkDiv.appendChild(networkHeader);

    networks[network].forEach((ipAddress) => {
      const ipElement = document.createElement("div");
      ipElement.className = "network-ip";
      ipElement.textContent = ipAddress;
      networkDiv.appendChild(ipElement);
    });

    resultArea.appendChild(networkDiv);
    colorToggle = !colorToggle;
  }

  ipInput.value = "";
  maskInput.value = "";
  ipInput.focus();
});

function isValidIP(ip) {
  const pattern =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return pattern.test(ip);
}

function calculateNetworkAddress(ip, mask) {
  const ipOctets = ip.split(".").map(Number);
  const maskOctets = mask.split(".").map(Number);
  const networkOctets = [];

  for (let i = 0; i < 4; i++) {
    networkOctets.push(ipOctets[i] & maskOctets[i]);
  }

  return networkOctets.join(".");
}
