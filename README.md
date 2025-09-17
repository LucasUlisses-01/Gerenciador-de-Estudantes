# Gerenciador de Estudantes

Este é um projeto simples em Node.js e Javascript que permite gerenciar informações de estudantes via terminal.
O sistema inclui funcionalidades como (Criar, Ler, Atualizar e Deletar) e também o cálculo de notas, média e situação final dos alunos.

## Funcionalidades
- Adicionar estudantes com nome e idade
- Adicionar novo estudante
- Atualizar dados de um estudante existente
- Remover estudante do cadastro
- Calcular média das notas de cada aluno
- Exibir situação:
	•	✅ Aprovado (média ≥ 7)
	•	⚠ Recuperação (5 ≤ média < 7)
	•	❌ Reprovado (média < 5)
- Sistema interativo no terminal (via readline-sync)

---

## Tecnologias usadas
- [Node.js](https://nodejs.org/)  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- [readline-sync](https://www.npmjs.com/package/readline-sync)  

---

## Como rodar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/LucasUlisses-01/gerenciador-de-estudantes.git

## Acesse a pasta:
2. cd gerenciador-de-estudantes

## instale as dependencias:
3. npm install

## Execute o sistema:
4. node src/index.js