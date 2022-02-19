
// calculator 버튼을 누르면 2숫자 계산후 마지막 박스에서 보여준다.
function calculate() {

    let firstValue = Number($("input[name=first]").val());

    //alert(firstValue);

    let secondValue = Number($("input[name=second]").val());

    //alert(secondValue);

    let operatorValue = $("select[name=operator]").val();

    //alert(operatorValue);

    if(operatorValue == "*" ) {
        let timesValue = firstValue * secondValue;
        $("input[name=result]").val(timesValue);
        //alert(timesValue);

    }
    else if(operatorValue == "/") {
        let divideValue = firstValue / secondValue;
        $("input[name=result]").val(divideValue);
        //alert(divideValue);

    }
    else if(operatorValue == "+") {
        let plusValue = firstValue + secondValue;
        $("input[name=result]").val(plusValue);
        //alert(plusValue);
    }
    else if(operatorValue == "-") {
        let minusValue = firstValue - secondValue;
        $("input[name=result]").val(minusValue);
        //alert(minusValue);

    }










}
