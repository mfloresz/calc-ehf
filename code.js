function CalcImp() {
    var Num1 = Number(document.getElementById('PedidoV').value)
    var Num2 = Number(document.getElementById('PrecioC').value)
    var Num3 = Number(document.getElementById('CostoM').value)
    var Res = Num1 * Num2;
    document.getElementById('ImpTot').value = Res;
    return false
}

function CalcUt() {
    var Num1 = Number(document.getElementById('PedidoV').value)
    var Num2 = Number(document.getElementById('PrecioC').value)
    var Num3 = Number(document.getElementById('CostoM').value)
    var Uti = (Num1 * Num2) - (Num1 * Num3);
    document.getElementById('Util').value = Uti;
    return false
}

function Calculo() {
    CalcImp();
    CalcUt();
    return false
}
