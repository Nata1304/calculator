let calc = {
    numbA: '',
    act: null,
    numbB: '',
    isRvn: false,
    vvd: null,
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const actions = ['plus', 'mine', 'divi', 'mult'];

$(document).ready(function() {
    console.log(calc);

    for (let i = 0; i < numbers.length; i++) {
        const e = numbers[i];

        $("#" + e).click(function() {
            console.log('#' + e);
    
            if (!calc.act) {
                calc.numbA += e;
                showvvd(calc.numbA);
            } else {
                calc.numbB += e;
                showvvd(calc.numbB);
            }
    
            console.log(calc);
        });   
    }
        
    for (let i = 0; i < array.length; i++) {
        const e = actions[i];

        $("#" + e).click(function() {
            console.log('#' + e);
    
            calc.act = e;
    
            console.log(calc);
        });   
    }

 

    $("#rvn").click(function() {
        console.log('#rvn');

        calc.isRvn = true;

        if (calc.act === 'plus') {
            calc.vvd = Number(calc.numbA) + Number(calc.numbB);
        }

        if (calc.act === 'mine') {
            calc.vvd = Number(calc.numbA) - Number(calc.numbB);
        }

        if (calc.act === 'divi') {
            calc.vvd = Number(calc.numbA) / Number(calc.numbB);
        }

        if (calc.act === 'mult') {
            calc.vvd = Number(calc.numbA) * Number(calc.numbB);
        }

        showvvd(calc.vvd);
        console.log(calc);
    });  

    function showvvd(number) {
        $("#vvd").text(number);
    }
});