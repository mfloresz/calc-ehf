function CalcImp() {
    var Num1 = Number(document.getElementById('PedidoV').value)
    var Num2 = Number(document.getElementById('PrecioC').value)
    var Res = Num1 * Num2;
    document.getElementById('ImpTot').value = Res;
    return false
}