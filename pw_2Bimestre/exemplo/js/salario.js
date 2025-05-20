$("#btnCalcular").click(function () {
    const nome = $("#nome").val();
    const idade = parseInt($("#idade").val());
    const salarioBruto = parseFloat($("#salario").val());
    const dependentes = parseInt($("#dependentes").val());

    if (!nome || isNaN(idade) || isNaN(salarioBruto) || isNaN(dependentes)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const bonus = idade > 50 ? 300 : 200;
    const inss = salarioBruto * 0.08;
    const vt = salarioBruto * 0.05;
    const adicionalDependentes = dependentes * 50;

    const salarioLiquido = salarioBruto - inss - vt + bonus + adicionalDependentes;

    alert(
        "Nome: " + nome +
        "\nDependentes: " + dependentes +
        "\nSalário Bruto: R$ " + salarioBruto.toFixed(2) +
        "\nINSS (8%): R$ " + inss.toFixed(2) +
        "\nVale Transporte (5%): R$ " + vt.toFixed(2) +
        "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2)
    );
});
