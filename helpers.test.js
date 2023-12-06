describe("Helpers test with setup and teardown", function() {
    beforeEach( function() {
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();
    });

    it ("should give the sum of the total bill amount(s)", function () {
        expect(sumPaymentTotal("billAmt")).toEqual(20);
    })

    it ("should calculate tip percentage", function () {
        billAmt = "20";
        tipAmt = "5";
        let amtInput = calculateTipPercent(billAmt, tipAmt);

        expect(amtInput).toEqual(25);
    })

    it ("should add new table data into the provided table row", function () {
        let newTr = document.createElement("tr");
        appendTd(newTr, "$20");

        expect(newTr.innerHTML).toContain('$20');
    })
    
    
    afterEach( function() {
        billAmtInput = "";
        tipAmtInput = "";
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})