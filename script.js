let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

function increaseHeart() {
  heartCount++;
  document.getElementById("heartCount").textContent = heartCount;
}

function copyNumber(number) {
  navigator.clipboard.writeText(number);
  alert("Hotline Number Copied: " + number);
  copyCount++;
  document.getElementById("copyCount").textContent = copyCount;
}

function callNumber(title, number) {
  if (coinCount >= 20) {
    alert("Calling " + title + ": " + number);
    coinCount -= 20;
    document.getElementById("coinCount").textContent = coinCount;

    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    const container = document.createElement("div");
    container.className = "flex justify-between items-center mt-2 border border-gray-200 bg-gray-50 rounded-lg shadow-lg p-2";

    const leftPart = document.createElement("div");
    leftPart.innerHTML = `
      <p class="font-semibold">${title}</p>
      <p class="text-sm text-gray-600">${number}</p>
    `;

    const rightPart = document.createElement("div");
    rightPart.innerHTML = `<span class="text-xs">${timeStr}</span>`;

    container.appendChild(leftPart);
    container.appendChild(rightPart);

    document.getElementById("callHistory").appendChild(container);
  } else {
    alert("Not enough coins to make a call!");
  }
}

function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}
