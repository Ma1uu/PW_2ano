//validação simples
//$("#formExemplo").validate();

$("#formExemplo").validate({
    debug: true,
    rules: {
        txtemail: {
            required: true,
            email: true,
        },
        txtnome: {
            required: true,
            rangelength: [2, 50],
        },
        txtidade: {
            min: 18,
            max: 100,
            required: true,
            //range: [18,100],
        }
    },
    messages: {
        txtemail: {
            required: "E-mail obrigatório",
            email: "Formato inválido de e-mail",
        },
        txtnome: {
            required: "Nome obrigatório",
            minlength: "Exigido 2 caracteres",
            maxlength: "Até 50 caracteres",
        },
        txtidade:{
            required: "Idade obrigatória",
            min: "Valor mínimo: 18",
            max: "Valor máximo: 100",
        }
    }
});