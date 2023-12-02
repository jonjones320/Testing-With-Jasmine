window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const years = document.getElementById("loan-years");
  const amount = document.getElementById("loan-amount");
  const rate = document.getElementById("loan-rate");

  years.value = "1";
  amount.value = "50";
  rate.value = "3";
}

function update() {
  const values = getCurrentUIValues();
  calculateMonthlyPayment(values);
  console.log(values);
}

function calculateMonthlyPayment(values) {
  const P = values.amount;
  const n = values.years * 12;
  const i = values.rate /100 /12;

  const monthlyPayment = ((P * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
 
  updateMonthly(monthlyPayment);
}

function updateMonthly(monthlyPayment) {
  let output = document.querySelector("#monthly-payment");
  output.innerText = `$${monthlyPayment}`;
}
