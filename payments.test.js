describe("Payments test with setup and tear-down", function() {
    beforeEach( function() {
        billAmtInput.value = "20";
        tipAmtInput.value = "5";
    });

    it ("1 should add the current payment info to the payment table", function() {
        console.log("Test 1");
        submitPaymentInfo();
        
        // console.log("Test1 bill", allPayments["payment1"].billAmt);
        // console.log("Test1 tip", allPayments["payment1"].tipAmt);
        // console.log("Test1 %", allPayments["payment1"].tipPercent);

        console.log("allPayments:", allPayments);
    
        const payment1 = allPayments["payment1"];
        
        console.log("payment1:", payment1);
        console.log("bill 1", payment1 ? payment1.billAmt : 'undefined');
        console.log("tip 1", payment1 ? payment1.tipAmt : 'undefined');
        console.log("% 1", payment1 ? payment1.tipPercent : 'undefined');

        expect(payment1.billAmt).toEqual("20")
        expect(payment1.tipAmt).toEqual("5")
        expect(payment1.tipPercent).toEqual(25)
    });

    it ("2 should return input values in createCurPayment object", function() {
        // console.log("Test 2");
        let curPayment = createCurPayment();

        // console.log("Test2 bill", allPayments["payment1"].billAmt);
        // console.log("Test2 tip", allPayments["payment1"].tipAmt);
        // console.log("Test2 %", allPayments["payment1"].tipPercent);
        
        expect(curPayment.billAmt).toEqual("20");
        expect(curPayment.tipAmt).toEqual("5");
        expect(curPayment.tipPercent).toEqual(25);
    });

    it ("3 should add new row to payment table", function() {
        // console.log("Test 3");
        paymentRows = document.querySelectorAll("#paymentTable tbody")

        // console.log("Test3 bill", allPayments["payment1"].billAmt);
        // console.log("Test3 tip", allPayments["payment1"].tipAmt);
        // console.log("Test3 %", allPayments["payment1"].tipPercent);

        expect(paymentRows[0].innerHTML).toEqual("$20");
        expect(paymentRows[1].innerHTML).toEqual("$5");
        expect(paymentRows[2].innerHTML).toEqual("25%");
        expect(paymentRows[3].innerHTML).toEqual("X");

    });

    it ("4 should update the summary table", function() {
        // console.log("Test 4");
        paySumTable = document.querySelectorAll("#summaryTable tbody tr td")

        // console.log("Test4 bill", allPayments["payment1"].billAmt);
        // console.log("Test4 tip", allPayments["payment1"].tipAmt);
        // console.log("Test4 %", allPayments["payment1"].tipPercent);

        expect(paySumTable[0].innerHTML).toEqual('$20');
        expect(paySumTable[1].innerHTML).toEqual('$5');
        expect(paySumTable[2].innerHTML).toEqual('25%');
    });

    afterEach( function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})