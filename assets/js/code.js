function CalcImp() {
    var Num1 = Number(document.getElementById('PedidoV').value)
    var Num2 = Number(document.getElementById('PrecioC').value)
    var Num3 = Number(document.getElementById('CostoM').value)
    var Res1 = (Num1 * Num2);
    var Res = Math.round(Res1);
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

function Sumar() {
    var KgI = Number(document.getElementById('PedidoV').value)
    var KgA = Number(document.getElementById('KgEst').value)
    var KgF = (KgI + KgA);
    document.getElementById('PedidoV').value = KgF;
    return false
}

function CSumar() {
    Sumar()
    CalcImp();
    CalcUt();
    Formato();
    return false
}
function Calculo() {
    CalcImp();
    CalcUt();
    Formato();
    return false
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

function Formato() {
    document.getElementById("ImpTot").value = formatMoney(document.getElementById("ImpTot").value);
    document.getElementById("Util").value = formatMoney(document.getElementById("Util").value);
};

// Estimar Piezas
function EstPza() {
    var Num4 = Number(document.getElementById('LongVara').value)
    var Num5 = Number(document.getElementById('KgSol').value)
    var EstimPza = (Num4 * 2.515);
    var EstimPza = EstimPza + ( EstimPza * 0.06);
    var EstimPza = (1000 / EstimPza) * Num5;
    var EstimPza = Math.round(EstimPza);
    document.getElementById('PzaEst').value = EstimPza;
    return false
}
// Estimar Kilogramos
function EstKg() {
    var Num6 = Number(document.getElementById('LongVara').value)
    var Num7 = Number(document.getElementById('PzaSol').value)
    var EstimKg = ((Num6 * 2.515) * Num7) / 1000;
    var EstimKg = EstimKg + (EstimKg * 0.06);
    document.getElementById('KgEst').value = EstimKg;
    return false
}

function FormatoE() {
    document.getElementById("PzaEst").value = formatMoney(document.getElementById("PzaEst").value);
    document.getElementById("KgEst").value = formatMoney(document.getElementById("KgEst").value);
};

function CalculoE() {
    EstPza();
    EstKg();
    FormatoE();
    return false
}
