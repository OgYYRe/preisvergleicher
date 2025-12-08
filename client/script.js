const prices = {
  milk: { migros: 2.3, coop: 1.85, lild: 1.39, aldi: 1.59 },
  bread: { migros: 1.0, coop: 1.0, lild: 0.99, aldi: 0.99 },
  eggs: { migros: 4.25, coop: 4.1, lild: 4.79, aldi: 4.19 },
};
const cb_milk = document.getElementById("cb_milk");
const cb_bread = document.getElementById("cb_bread");
const cb_eggs = document.getElementById("cb_eggs");

const statusText = document.getElementById("statusText-test");

cb_milk.addEventListener("change", milkHandler);
async function milkHandler() {
  const response = await fetch("http://localhost:3210/api/select-milk");
  const ids = ["milk_mig", "milk_coop", "milk_lidl", "milk_aldi"];
  const values = [
    prices.milk.migros,
    prices.milk.coop,
    prices.milk.lild,
    prices.milk.aldi,
  ];
  if (cb_milk.checked) {
    ids.forEach((id, i) => {
      document.getElementById(id).textContent = values[i] + " CHF";
    });
    colorizePrices(ids, values);
    console.log("Milch ausgewählt");
  } else {
    ids.forEach((id) => {
      document.getElementById(id).textContent = "";
      document.getElementById(id).className = "";
    });
    console.log("Milch nicht ausgewählt");
  }
}

cb_bread.addEventListener("change", breadHandler);
async function breadHandler() {
  const response = await fetch("http://localhost:3210/api/select-bread");
  const ids = ["bread_mig", "bread_coop", "bread_lidl", "bread_aldi"];
  const values = [
    prices.bread.migros,
    prices.bread.coop,
    prices.bread.lild,
    prices.bread.aldi,
  ];
  if (cb_bread.checked) {
    ids.forEach((id, i) => {
      document.getElementById(id).textContent = values[i] + " CHF";
    });
    colorizePrices(ids, values);
    console.log("Brot ausgewählt");
  } else {
    ids.forEach((id) => {
      document.getElementById(id).textContent = "";
      document.getElementById(id).className = "";
    });
    console.log("Brot nicht ausgewählt");
  }
}

cb_eggs.addEventListener("change", eggsHandler);
async function eggsHandler() {
  const response = await fetch("http://localhost:3210/api/select-eggs");
  const ids = ["eggs_mig", "eggs_coop", "eggs_lidl", "eggs_aldi"];
  const values = [
    prices.eggs.migros,
    prices.eggs.coop,
    prices.eggs.lild,
    prices.eggs.aldi,
  ];
  if (cb_eggs.checked) {
    ids.forEach((id, i) => {
      document.getElementById(id).textContent = values[i] + " CHF";
    });
    colorizePrices(ids, values);
    console.log("Eier ausgewählt");
  } else {
    ids.forEach((id) => {
      document.getElementById(id).textContent = "";
      document.getElementById(id).className = "";
    });
    console.log("Eier nicht ausgewählt");
  }
}

// Farbe zum Preis hinzufügen
function colorizePrices(ids, values) {
  // Finde Minimum und Maximum
  const min = Math.min(...values);
  const max = Math.max(...values);
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (values[i] === min) {
      el.className = "price-green";
    } else if (values[i] === max) {
      el.className = "price-red";
    } else {
      el.className = "price-orange";
    }
  });
}
