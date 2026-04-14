//Agora será necessário criar o controller para o médico, onde serão implementados os métodos para manipular os dados dos médicos, como criar, ler, atualizar e deletar médicos. O controller irá interagir com o modelo para realizar essas operações.
import { MedicoModel } from "../model/medico.model.js";
//
import { database } from "../../../config/database.js";
//desestruturando o array de médicos do banco de dados para ser utilizado no controller.
export class MedicoController {
  //ação para criar um novo médico, onde será necessário passar os dados do médico para criar um novo registro no sistema.
  //O método criarCadastro recebe os dados do médico como parâmetros, verifica se todos os campos estão preenchidos, cria uma nova instância do modelo de médico com os dados fornecidos, adiciona o novo médico ao array de médicos do banco de dados e exibe uma mensagem de sucesso no console. Caso ocorra algum erro durante o processo, ele é capturado e exibido no console.
  static criarCadastro(id, nome, telefone, email, especialidade, crm) {
    try {
      if (!id || !nome || !telefone || !email || !especialidade || !crm) {
        return console.error(
          "Todos os campos são obrigatórios para criar um médico.",
        );
      }
      const medico = new MedicoModel(
        id,
        nome,
        telefone,
        email,
        especialidade,
        crm,
      ); //cria uma nova instância do modelo de médico, utilizando os dados fornecidos como parâmetros para criar um novo registro de médico.

      database.push(medico); //adiciona o novo médico criado ao array de médicos do banco de dados, permitindo que ele seja armazenado e acessado posteriormente.
      console.log("Médico criado com sucesso:", medico); //exibe uma mensagem de sucesso no console, indicando que o médico foi criado com sucesso, juntamente com os dados do médico criado.
    } catch (error) {
      console.error("Erro ao criar médico:", error.message);
    }
  }
  //ação para listar todos os médicos cadastrados no sistema, onde será necessário acessar o array de médicos do banco de dados e exibir os dados dos médicos de forma organizada.
  static listar() {
    try {
      if (database.length === 0) {
        return console.warn("Nenhum médico encontrado."); //verifica se o array de médicos está vazio, caso esteja, exibe uma mensagem de erro indicando que nenhum médico foi encontrado.
      }
      console.table(database); //exibe os dados dos médicos em formato de tabela no console, facilitando a visualização e leitura dos registros.
    } catch (error) {
      console.error("Erro ao listar médicos:", error.message);
    }
  }
  //ação para atualizar os dados de um médico existente, onde será necessário passar o ID do médico a ser atualizado, juntamente com os novos dados para realizar a atualização do registro do médico no sistema.
  static atualizar(
    id,
    novo_nome,
    novo_telefone,
    novo_email,
    novo_especialidade,
  ) {
    try {
      if (!id) {
        return console.error("ID do médico é obrigatório para atualização."); //verifica se o ID do médico foi fornecido, caso contrário, exibe uma mensagem de erro indicando que o ID é obrigatório para realizar a atualização.
      }
      const medico = database.find((medico) => medico.id === id); //procura um médico no array de médicos do banco de dados com base no ID fornecido como parâmetro, utilizando o método find para localizar o médico correspondente. //Se o médico for encontrado, ele é armazenado na variável medico para que possa ser atualizado posteriormente.
      if (!medico) {
        return console.error("Médico não encontrado."); //verifica se o médico foi encontrado, caso contrário, exibe uma mensagem de erro indicando que o médico não foi encontrado.
      }
      //atualiza os dados do médico encontrado com os novos valores fornecidos como parâmetros, utilizando o operador lógico OR (||) para manter os valores antigos caso os novos valores sejam falsy (como null ou undefined). Dessa forma, apenas os campos que foram fornecidos como novos valores serão atualizados, enquanto os campos que não foram fornecidos permanecerão inalterados.
      medico.nome = novo_nome || medico.nome;
      medico.telefone = novo_telefone || medico.telefone;
      medico.email = novo_email || medico.email;
      medico.especialidade = novo_especialidade || medico.especialidade;
      console.log("Médico atualizado com sucesso:", medico); //exibe uma mensagem de sucesso no console, indicando que o médico foi atualizado com sucesso, juntamente com os dados do médico atualizado.
    } catch (error) {
      console.error("Erro ao atualizar médico:", error.message);
    }
  }

  static excluirPorId(id) {
    try {
      const index = database.findIndex((medico) => medico.id === id); //procura o índice de um médico no array de médicos do banco de dados com base no ID fornecido como parâmetro, utilizando o método findIndex para localizar o índice do médico correspondente. //Se o médico for encontrado, o índice é armazenado na variável medico para que possa ser excluído posteriormente.
      if (index === -1) {
        return console.error("Médico não encontrado."); //verifica se o índice do médico foi encontrado, caso contrário, exibe uma mensagem de erro indicando que o médico não foi encontrado.
      }
      database.splice(index, 1); //remove o médico do array de médicos do banco de dados com base no índice encontrado, utilizando o método splice para remover o elemento correspondente ao médico do array.)
    } catch (error) {
      console.error("Erro ao excluir médico por id:", error.message);
    }
  }

  static listarPorId(id) {
    try {
      const medico = database.find((m) => m.id === id);
      if (!medico) {
        return console.error("Médico não encontrado.");
      }
      console.table(medico);
    } catch (error) {
      console.error("Erro ao listar médico por id:", error.message);
    }
  }

  static excluirTodos() {
    try {
      database.length = 0; //limpa o array de médicos do banco de dados, removendo todos os registros de médicos armazenados. Isso é feito definindo o comprimento do array como zero, o que efetivamente esvazia o array e remove todas as referências aos objetos de médico anteriormente armazenados.
      console.log("Todos os médicos foram excluídos do sistema."); //exibe uma mensagem de sucesso no console, indicando que todos os médicos foram excluídos com sucesso.
    } catch (error) {
      console.error("Erro ao excluir todos os médicos:", error.message);
    }
  }
}
