    const heartCount = document.getElementById("heartCount");
    const coinCount = document.getElementById("coinCount");
    const copyCount = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");
    const clearHistory = document.getElementById("clearHistory");

    let hearts = 0;
    let coins = 100;
    let copies = 0;

    // Heart Function
    document.querySelectorAll(".heartBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        hearts++;
        heartCount.textContent = hearts;
        btn.textContent = "❤️"; 
      });
    });

    // Copy Function
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const number = card.querySelector(".service-number").textContent;
        navigator.clipboard.writeText(number);
        copies++;
        copyCount.textContent = copies;
        alert("Copied: " + number);
      });
    });

    // Call Function
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const name = card.querySelector(".service-name").textContent;
        const number = card.querySelector(".service-number").textContent;

        if(coins < 20){
          alert("Not enough coins! Each call costs 20 coins.");
          return;
        }

        coins -= 20;
        coinCount.textContent = coins;

        alert(`Calling ${name} at ${number}`);

        // Time
        const time = new Date().toLocaleTimeString();

       
    // Add to History
    const li = document.createElement("li");
    li.className = "flex justify-between items-center border-b pb-2";

    li.innerHTML = `
      <div>
        <p class="font-semibold">${name}</p>
        <p class="text-gray-600 text-sm">${number}</p>
      </div>
      <span class="text-gray-500 text-sm">${time}</span>
    `;

    historyList.appendChild(li);
  });
});

    // Clear History
    clearHistory.addEventListener("click", () => {
      historyList.innerHTML = "";
    });

 
