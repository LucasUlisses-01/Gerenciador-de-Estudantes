const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array principal que guarda todos os estudantes
let estudantes = [];

// ========================
// Funções básicas do sistema
// ========================

// Função para cadastrar um estudante
function cadastrarEstudante(nome, idade, notas) {
    // Valida se os dados estão corretos
    if (!nome || idade <= 0 || !Array.isArray(notas)) {
        console.log("Dados inválidos. Tente novamente.");
        return;
    }

    // Cria um objeto estudante
    let novoEstudante = { nome, idade, notas };

    // Adiciona no array principal-
    estudantes.push(novoEstudante);

    console.log(`Estudante ${nome} cadastrado com sucesso!`);
}

// Função para calcular a média de um array de notas
function calcularMedia(notas) {
    if (!Array.isArray(notas) || notas.length === 0) return 0;

    // reduce: soma todas as notas
    let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    let media = soma / notas.length;
    return media;
}

// Função para listar estudantes com média
function listarEstudantesComMedia() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado ainda.");
        return;
    }

    console.log("=== Lista de Estudantes com Média ===");
    estudantes.forEach((estudante, index) => {
        let media = calcularMedia(estudante.notas);
        console.log(`${index + 1}.Nome: ${estudante.nome}, Idade: ${estudante.idade}, Média: ${media.toFixed(2)}`);
    });
}

// Função para buscar estudantes por nome (case-insensitive)
function buscarEstudante(nomeBusca) {
    if (!nomeBusca) {
        console.log("Digite um nome para buscar.");
        return;
    }

    // filter: retorna todos os estudantes cujo nome contém a busca
    let resultados = estudantes.filter(estudante =>
        estudante.nome.toLowerCase().includes(nomeBusca.toLowerCase())
    );

    if (resultados.length === 0) {
        console.log(`Nenhum estudante encontrado com o nome "${nomeBusca}".`);
        return;
    }

    console.log(`=== Estudantes encontrados para "${nomeBusca}" ===`);
    resultados.forEach((estudante, index) => {
        console.log(`${index + 1}.Nome: ${estudante.nome}, Idade: ${estudante.idade}, Notas: ${estudante.notas.join(", ")}`);
    });
}

// Função para encontrar o estudante com maior média
function estudanteMaiorMedia() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    // map: cria um array com médias dos estudantes
    let medias = estudantes.map(estudante => calcularMedia(estudante.notas));

    // find: encontra o primeiro estudante com a maior média
    let maiorMedia = Math.max(...medias);
    let estudanteTop = estudantes.find(estudante => calcularMedia(estudante.notas) === maiorMedia);

    console.log(`Estudante com maior média: ${estudanteTop.nome} - Média: ${maiorMedia.toFixed(2)}`);
}

// função para encontrar a media geral da turma
function mediaGeralTurma() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    // map: cria um array com todas as médias individuais
    let medias = estudantes.map(estudante => calcularMedia(estudante.notas));

    // reduce: soma todas as médias
    let soma = medias.reduce((acumulador, media) => acumulador + media, 0);

    // divide pelo número de estudantes
    let mediaGeral = soma / estudantes.length;

    console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
}

// Função para gerar relatórios de aprovação, recuperação e reprovação
function relatoriosEstudantes() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    // filter: separa estudantes por situação
    let aprovados = estudantes.filter(e => calcularMedia(e.notas) >= 7);
    let recuperacao = estudantes.filter(e => {
        let media = calcularMedia(e.notas);
        return media >= 5 && media < 7;
    });
    let reprovados = estudantes.filter(e => calcularMedia(e.notas) < 5);

    console.log("== Aprovados ==");
    aprovados.forEach(e => console.log(`${e.nome} - Média: ${calcularMedia(e.notas).toFixed(2)}`));

    console.log("\n== Recuperação ==");
    recuperacao.forEach(e => console.log(`${e.nome} - Média: ${calcularMedia(e.notas).toFixed(2)}`));

    console.log("\n== Reprovados ==");
    reprovados.forEach(e => console.log(`${e.nome} - Média: ${calcularMedia(e.notas).toFixed(2)}`));
}

// ========================
// Funções para menu interativo
// ========================

// Função para cadastro pelo menu
function cadastrarAlunoMenu() {
    readline.question("Nome do estudante: ", nome => {
        readline.question("Idade: ", idade => {
            readline.question("Notas separadas por vírgula: ", notasInput => {
                let notas = notasInput.split(",").map(n => parseFloat(n));
                cadastrarEstudante(nome, parseInt(idade), notas);
                menu(); // volta pro menu
            });
        });
    });
}

// Função do menu contínuo
function menu() {
    console.log("\n=== Sistema de Estudantes ===");
    console.log("1 - Cadastrar estudante");
    console.log("2 - Listar estudantes com média");
    console.log("3 - Buscar estudante por nome");
    console.log("4 - Estudante com maior média");
    console.log("5 - Relatórios");
    console.log("6 - Média geral da turma");
    console.log("7 - Sair");

    readline.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case "1":
                cadastrarAlunoMenu();
                break;
            case "2":
                listarEstudantesComMedia();
                menu();
                break;
            case "3":
                readline.question("Digite o nome para buscar: ", nome => {
                    buscarEstudante(nome);
                    menu();
                });
                break;
            case "4":
                estudanteMaiorMedia();
                menu();
                break;
            case "5":
                relatoriosEstudantes();
                menu();
                break;
            case "6":
                mediaGeralTurma();
                menu();
                break;
            case "7":
                console.log("Saindo do sistema...");
                readline.close();
                break;

            default:
                console.log("Opção inválida!");
                menu();
        }
    });
}
menu();