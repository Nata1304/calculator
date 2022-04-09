var calc = {
    numbA: '',
    act: null,
    numbB: '',
    isRvn: false,
    vvd: null,
}

$(document).ready(function() {
    console.log(calc);


    $("#1").click(function() {
        console.log('#1');

        if (!calc.act) {
            calc.numbA += '1';
            showvvd(calc.numbA);
        } else {
            calc.numbB += '1';
            showvvd(calc.numbB);
        }

        console.log(calc);
    });   

    $("#2").click(function() {
        console.log('#2');

        if (!calc.act) {
            calc.numbA += '2';
            showvvd(calc.numbA);
        } else {
            calc.numbB += '2';
            showvvd(calc.numbB);
        }

        console.log(calc);
    });

    $("#plus").click(function() {
        console.log('#plus');

        calc.act = 'plus';

        console.log(calc);
    });   

    $("#rvn").click(function() {
        console.log('#rvn');

        calc.isRvn = true;

        if (calc.act === 'plus') {
            calc.vvd = Number(calc.numbA) + Number(calc.numbB);
        }

        showvvd(calc.vvd);
        console.log(calc);
    });  

    function showvvd(number) {
        $("#vvd").text(number);
    }
});