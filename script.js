function calcElectricity() {
  const elecInput = document.getElementById('electricity').value;


  if (elecInput === "" || isNaN(elecInput) || parseFloat(elecInput) < 0) {
    const output = document.getElementById('electricityOutput');
    output.style.display = "block";
    output.innerHTML = `<p style="color:red;">⚠️ Please enter a valid electricity usage (positive number).</p>`;
    return; 
  }

  const elecUsage = parseFloat(elecInput);
  const elecRate = 7; 
  const elecCost = elecUsage * elecRate;

  let tip = "";
  if (elecUsage > 15) {
    tip = "💡 High electricity usage. Try switching off unused appliances.";
  } else if (elecUsage === 0) {
    tip = "⚡ No electricity usage entered.";
  } else {
    tip = "✅ Good job! Electricity usage is within range.";
  }

  const output = document.getElementById('electricityOutput');
  output.style.display = "block";
  output.innerHTML = `
    <p>Electricity Cost: ₹${elecCost.toFixed(2)}</p>
    <div class="tip">${tip}</div>
  `;

  document.getElementById('electricity').value = "";
}

function calcWater() {
  const waterUsage = parseFloat(document.getElementById('water').value);

  if (isNaN(waterUsage) || waterUsage <= 0) {
    const output = document.getElementById('waterOutput');
    output.style.display = "block";
    output.innerHTML = `
      <p style="color:red;">⚠️ Please enter a valid water usage value.</p>
    `;
    return;
  }

  const waterRate = 0.02; 
  const waterCost = waterUsage * waterRate;

  let tip = "";
  if (waterUsage > 200) {
    tip = "🚰 High water usage. Try reducing shower time.";
  }
  else if (waterUsage === 0) {
    tip = "💧 No water usage entered.";}
  else {
    tip = "✅ Good job! Water usage is within range.";
  }

  const output = document.getElementById('waterOutput');
  output.style.display = "block";
  output.innerHTML = `
    <p>Water Cost: ₹${waterCost.toFixed(2)}</p>
    <div class="tip">${tip}</div>
  `;

  document.getElementById('water').value = "";
}


  