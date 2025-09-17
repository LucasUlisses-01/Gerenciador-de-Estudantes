const readline = require("readline-sync");
const {
  listarEstudantes,
  buscarEstudantePorId,
  adicionarEstudante,
  atualizarEstudante,
  removerEstudante
} = require("./estudantes");
const estudantes = require("./data");

let opcao;
do {
  console.log("\n=== Sistema de Estudantes ===");
  console.log("1 - Listar estudantes");
  console.log("2 - Adicionar estudante");
  console.log("3 - Atualizar estudante");
  console.log("4 - Remover estudante");
  console.log("0 - Sair");

  opcao = readline.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      listarEstudantes();
      break;
    case 2:
      const nome = readline.question("Nome: ");
      const idade = readline.questionInt("Idade: ");
      const email = readline.question("Email: ");
      const id = estudantes.length > 0 ? Math.max(...estudantes.map(e => e.id)) + 1 : 1;
      adicionarEstudante({ id, nome, idade, email });
      break;
    case 3:
      const idAtualizar = readline.questionInt("ID do estudante que quer atualizar: ");
      const novoNome = readline.question("Novo nome: ");
      const novaIdade = readline.questionInt("Nova idade: ");
      const novoEmail = readline.question("Novo email: ");
      atualizarEstudante(idAtualizar, { nome: novoNome, idade: novaIdade, email: novoEmail });
      break;
    case 4:
      const idRemover = readline.questionInt("ID do estudante que quer remover: ");
      removerEstudante(idRemover);
      break;
    case 0:
      console.log("Encerrando o sistema...");
      break;
    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);