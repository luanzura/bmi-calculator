const bmiTabela = {
    magreza_leve: 16,
    magreza_modera: 16.9,
    peso_ideal: 24.9,
    sobrepeso: 29.9,
    obesidade_1: 34.9,
    obesidade_2: 39.9,
    obesidade_3: 40 
}

function bmiCalculator() {
    let peso = $("#peso").val();
    let altura = $("#altura").val();
    let bmiCalc = Math.floor(peso / (altura * altura));
    return bmiCalc;
};

function tabela() {
    let bmiFTabela = bmiCalculator();
    resultadoTabela ="";
    if (bmiFTabela <= bmiTabela.magreza_leve) {
        resultadoTabela ="<span class='text-danger'>Magreza leve</span>";
    } else if (bmiFTabela > bmiTabela.magreza_leve && bmiFTabela <= bmiTabela.magreza_modera) {
        resultadoTabela = "<span class='text-danger-emphasis'>Magreza modera</span>";
    } else if (bmiFTabela > bmiTabela.magreza_modera && bmiFTabela <= bmiTabela.peso_ideal) {
        resultadoTabela = "<span class='text-success'>Peso ideal</span>";
    } else if (bmiFTabela > bmiTabela.peso_ideal && bmiFTabela <= bmiTabela.sobrepeso) {
        resultadoTabela = "<span class='text-warning'>Sobrepeso</span>";
    } else if (bmiFTabela > bmiTabela.sobrepeso && bmiFTabela <= bmiTabela.obesidade_1) {
        resultadoTabela = "<span class='text-danger'>Obesidade grau I</span>";
    } else if (bmiFTabela > bmiTabela.obesidade_1 && bmiFTabela <= bmiTabela.obesidade_2) {
        resultadoTabela = "<span class='text-danger'>Obesidade grau II ou severa</span>";
    } else {
        resultadoTabela = "<span class='text-danger'>Obesidade grau III ou mórbida</span>";
    };
    return resultadoTabela;
};

$("button").click(function() {
    let bmi = bmiCalculator();
    $("#container-resultado").removeClass("hide");
    $("#resultado").text(bmi);
    let tabelaResultado = tabela();
    $("h5").html(tabelaResultado);
});