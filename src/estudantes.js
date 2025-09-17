let estudantes = require("./data");

// Listar todos os estudantes
function listarEstudantes() {
  if (estudantes.length === 0) {
    console.log("Nenhum estudante cadastrado.");
  } else {
    console.log("\n=== Lista de Estudantes ===");
    estudantes.forEach(est => {
      console.log(`ID: ${est.id}, Nome: ${est.nome}, Idade: ${est.idade}, Email: ${est.email}`);
    });
  }
}

// Buscar estudante por ID
function buscarEstudantePorId(id) {
  return estudantes.find(est => est.id === id);
}

// Adicionar estudante
function adicionarEstudante(estudante) {
  estudantes.push(estudante);
  console.log(`Estudante ${estudante.nome} adicionado com sucesso!`);
}

// Atualizar estudante
function atualizarEstudante(id, novosDados) {
  const est = buscarEstudantePorId(id);
  if (!est) {
    console.log("Estudante não encontrado!");
    return;
  }
  Object.assign(est, novosDados);
  console.log(`Estudante ${est.nome} atualizado com sucesso!`);
}

// Remover estudante
function removerEstudante(id) {
  const index = estudantes.findIndex(est => est.id === id);
  if (index === -1) {
    console.log("Estudante não encontrado!");
    return;
  }
  const removido = estudantes.splice(index, 1);
  console.log(`Estudante ${removido[0].nome} removido com sucesso!`);
}

module.exports = {
  listarEstudantes,
  buscarEstudantePorId,
  adicionarEstudante,
  atualizarEstudante,
  removerEstudante,
};