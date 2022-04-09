var calc = {
    numbA: '',
    act: null,
    numbB: '',
    isRvn: false,
    vvd: null,
}

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var actions = ['plus', 'mine', 'divi', 'mult'];

$(document).ready(function() {
    console.log(calc);

    for (let i = 0; i < array.length; i++) {
        const e = numbers[i];

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
    }
        
    }

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

        if (calc.act === 'mine') {
            calc.vvd = Number(calc.numbA) + Number(calc.numbB);
        }

        if (calc.act === 'divi') {
            calc.vvd = Number(calc.numbA) + Number(calc.numbB);
        }

        if (calc.act === 'mult') {
            calc.vvd = Number(calc.numbA) + Number(calc.numbB);
        }

        showvvd(calc.vvd);
        console.log(calc);
    });  

    function showvvd(number) {
        $("#vvd").text(number);
    }
});