function totalPoints(){
    // var creds = credits();
    var creds = 10;

    var distinction = $("input:text[name=distinction]").val();
    var distpoints = distinction * 9 * creds;
    console.log('Distinction points: ' + distpoints)

    var merit = $("input:text[name=merit]").val();
    var meritpoints = merit * 8 * creds;
    console.log('Merit points: ' + meritpoints)

    var pass = $("input:text[name=pass]").val();
    var passpoints = pass * 7 * creds;
    console.log('Pass points: ' + passpoints)

    var tp = (+distpoints + +meritpoints + +passpoints);

    console.log('Overall Total: '+ tp);

    var lettergrade;

    if (tp >= 1260 && tp <= 1299 ){
        lettergrade = "PPP"
    } else if (tp >= 1300 && tp <= 1339 ) {
        lettergrade = "MPP";
    } else if (tp >= 1340 && tp <= 1379 ) {
        lettergrade = "MMP";
    } else if (tp >= 1380 && tp <= 1419 ) {
        lettergrade = "MMM";
    } else if (tp >= 1420 && tp <= 1459 ) {
        lettergrade = "DMM";
    } else if (tp >= 1460 && tp <= 1499 ) {
        lettergrade = "DDM";
    } else if (tp >= 1500 && tp <= 1529 ) {
        lettergrade = "DDD";
    } else if (tp >= 1530 && tp <= 1559 ) {
        lettergrade = "D*DD";
    } else if (tp >= 1560 && tp <= 1589 ) {
        lettergrade = "D*D*D";
    } else if (tp >= 1590) {
        lettergrade = "D*D*D*";
    }

    console.log(lettergrade);
    $("input:text[name=total]").val(lettergrade);
}

function credits() {
    $("input:radio[name=credits]").click(function() {
        var value = parseInt($(this).val()) + 1;
        console.log(value);
        return value;
    });
}

$(document).ready(function(){
    
    var merit;

    credits();
    
    $( ".grade-form input" ).bind("keyup change ready", function() {
        
        var distinction = $("input:text[name=distinction]").val();
        simpleStorage.set("sDistinction", distinction);
        console.log(distinction);

        var merit = $("input:text[name=merit]").val();
        simpleStorage.set("sMerit", merit)
        console.log(merit);

        var pass = $("input:text[name=pass]").val();
        simpleStorage.set("sPass", pass);
        console.log(pass);
        
        var lettergrade = $("input:text[name=total]").val();
        simpleStorage.set("sLetterGrade", lettergrade);

        var totalunits = +distinction + +merit + +pass;
        console.log('total '+totalunits)
        
        if (totalunits > 18) {
            console.log('not 18');
        }

        totalPoints();
        
    });
    
        var distinctionstorage = simpleStorage.get("sDistinction");
        console.log('localstorage ' +distinctionstorage);
    
        if(distinctionstorage) {
            $("input:text[name=distinction]").val(distinctionstorage);
        }
    
        var meritstorage = simpleStorage.get("sMerit");
        console.log('localstorage ' +meritstorage);
    
        if(meritstorage) {
            $("input:text[name=merit]").val(meritstorage);
        }
    
        var passstorage = simpleStorage.get("sPass");
        console.log('localstorage ' +passstorage);
    
        if(passstorage) {
            $("input:text[name=pass]").val(passstorage);
        }
    
        var lettergradestorage = simpleStorage.get("sLetterGrade");
    
        if(lettergradestorage) {
            $("input:text[name=total]").val(lettergradestorage);   
        }
    
        $('#cleardata').click(function(){
            simpleStorage.flush();
            $('input:text').val('');
        });



});