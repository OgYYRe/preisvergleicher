const prices = {
  milk: { migros: 1.0, coop: 1.1, lild: 0.95, aldi: 0.9 },
  bread: { migros: 1.5, coop: 1.6, lild: 1.4, aldi: 1.3 },
  eggs: { migros: 3.0, coop: 3.2, lild: 2.8, aldi: 2.7 },
};
const cb_milk = document.getElementById("cb_milk");
const cb_bread = document.getElementById("cb_bread");
const cb_eggs = document.getElementById("cb_eggs");
const testCorsBtn = document.getElementById("testCorsBtn");

const statusText = document.getElementById("statusText-test");
testCorsBtn.addEventListener("click", corsHandler);
async function corsHandler() {
  const response = await fetch("http://localhost:3210/api/cors-test");
  const data = await response.json();
  console.log(data);
  statusText.textContent = data.message;
}

cb_milk.addEventListener("change", milkHandler);
async function milkHandler() {
  const response = await fetch("http://localhost:3210/api/select-milk");
  if (cb_milk.checked) {
    console.log("Milch ausgewählt");
    document.getElementById("milk_mig").textContent =
      prices.milk.migros + " CHF";
    document.getElementById("milk_coop").textContent =
      prices.milk.coop + " CHF";
    document.getElementById("milk_lidl").textContent =
      prices.milk.lild + " CHF";
    document.getElementById("milk_aldi").textContent =
      prices.milk.aldi + " CHF";
  } else {
    console.log("Milch nicht ausgewählt");
    document.getElementById("milk_mig").textContent = "";
    document.getElementById("milk_coop").textContent = "";
    document.getElementById("milk_lidl").textContent = "";
    document.getElementById("milk_aldi").textContent = "";
  }
}

cb_bread.addEventListener("change", breadHandler);
async function breadHandler() {
  const response = await fetch("http://localhost:3210/api/select-bread");
  if (cb_bread.checked) {
    document.getElementById("bread_mig").textContent =
      prices.bread.migros + " CHF";
    document.getElementById("bread_coop").textContent =
      prices.bread.coop + " CHF";
    document.getElementById("bread_lidl").textContent =
      prices.bread.lild + " CHF";
    document.getElementById("bread_aldi").textContent =
      prices.bread.aldi + " CHF";
    console.log("Brot ausgewählt");
  } else {
    document.getElementById("bread_mig").textContent = "";
    document.getElementById("bread_coop").textContent = "";
    document.getElementById("bread_lidl").textContent = "";
    document.getElementById("bread_aldi").textContent = "";
    console.log("Brot nicht ausgewählt");
  }
}

cb_eggs.addEventListener("change", eggsHandler);
async function eggsHandler() {
  const response = await fetch("http://localhost:3210/api/select-eggs");
  if (cb_eggs.checked) {
    document.getElementById("eggs_mig").textContent = "3.0 CHF";
    document.getElementById("eggs_coop").textContent =
      prices.eggs.coop + " CHF";
    document.getElementById("eggs_lidl").textContent =
      prices.eggs.lild + " CHF";
    document.getElementById("eggs_aldi").textContent =
      prices.eggs.aldi + " CHF";
    console.log("Eier ausgewählt");
  } else {
    document.getElementById("eggs_mig").textContent = "";
    document.getElementById("eggs_coop").textContent = "";
    document.getElementById("eggs_lidl").textContent = "";
    document.getElementById("eggs_aldi").textContent = "";
    console.log("Eier nicht ausgewählt");
  }
}
