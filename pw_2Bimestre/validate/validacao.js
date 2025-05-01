$(document).ready(function() {
    $("#formExemplo").validate({
        errorClass: "text-danger", 
        validClass: "text-success", 
        rules: {
            txtemail: {
                required: true,
                email: true
            },
            txtnome: {
                required: true,
                rangelength: [2, 50]
            },
            txtfilhos: {
                required: true,
                min: 0,
                max: 10
            },
            txtsalario: {
                required: true,
                min: 2000,
                max: 10000
            },
            txtadmissao: {
                required: true
            },
            txtredessociais: {
                required: true,
                url: true
            }
        },
        messages: {
            txtemail: {
                required: "E-mail obrigatório",
                email: "Formato inválido de e-mail"
            },
            txtnome: {
                required: "Nome obrigatório",
                rangelength: "Nome deve ter entre 2 e 50 caracteres"
            },
            txtfilhos: {
                required: "Número de filhos é obrigatório",
                min: "O mínimo é 0",
                max: "O máximo é 10"
            },
            txtsalario: {
                required: "Salário é obrigatório",
                min: "Salário mínimo é 2000",
                max: "Salário máximo é 10000"
            },
            txtadmissao: {
                required: "Data de admissão obrigatória"
            },
            txtredessociais: {
                required: "Endereço das redes sociais é obrigatório",
                url: "Informe uma URL válida"
            }
        }
    });
});
