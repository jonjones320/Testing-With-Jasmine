describe("Montly Rate Tests", function() {
    // it ("should correctly calculate the monthly payment rate", function () {
  //   expect(calculateMonthlyPayment(values = {amount: 100, years: 5, rate: 5})).toEqual("$1.89")
  // })

  it('should calculate the monthly rate correctly', function () {
    const values = {amount: 100, years: 5, rate: 5};

    calculateMonthlyPayment(values);

    const output = document.querySelector("#monthly-payment").innerText;
    expect(output).toEqual("$1.89");
  });

  it('should correctly calculate the monthly rate', function() {
    const values = {amount: 300000, years: 30, rate: 3};

    calculateMonthlyPayment(values);

    const output = document.querySelector("#monthly-payment").innerText;
    expect(output).toEqual("$1264.81");
  })
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 100, years: 5, rate: 5};

  calculateMonthlyPayment(values);
  
  const output = document.querySelector("#monthly-payment").innerText;
  const Regex = /^\$[0-9]+(\.[0-9]{2})?/;
  expect(output).toMatch(Regex);
});

