describe("Payments test with setup and tear-down", function() {
    beforeEach( function() {
        billAmtInput.value = "20";
        tipAmtInput.value = "5";
        // console.log("billAmtInput", billAmtInput.value)
        // console.log("tipAmtInput", tipAmtInput.value)
        // console.log("billAmt", billAmt)
        // console.log("tipAmt", tipAmt)
        summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
        allPayments = {
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
        }
    });

    it ("should add the current payment info to the payment table", function() {
        // createCurPayment();
        // submitPaymentInfo();
        
        console.log("bill", allPayments["payment1"].billAmt);
        console.log("tip", allPayments["payment1"].tipAmt);
        console.log("%", allPayments["payment1"].tipPercent);

        expect(allPayments["payment1"].billAmt).toEqual("20")
        expect(allPayments["payment1"].tipAmt).toEqual("5")
        expect(allPayments["payment1"].tipPercent).toEqual(25)
    });

    it ("should return input values in createCurPayment object", function() {
        let curPayment = createCurPayment();
        
        expect(curPayment.billAmt).toEqual("20");
        expect(curPayment.tipAmt).toEqual("5");
        expect(curPayment.tipPercent).toEqual(25);
    });

    it ("should add new row to payment table", function() {
        // let curPayment = createCurPayment();
        // appendPaymentTable(curPayment);

        expect(summaryTds[0].innerText).toEqual("$20");
        expect(summaryTds[1].innerText).toEqual("$5");
        expect(summaryTds[2].innerText).toEqual("25%");

    });

    it ("should update the summary table", function() {

        expect(summaryTds[0].innerHTML).toEqual('$20');
        expect(summaryTds[1].innerHTML).toEqual('$5');
        expect(summaryTds[2].innerHTML).toEqual('25%');
    });

    afterEach( function() {
        billAmtInput.value = "";
        tipAmtInput.value = "";
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})
