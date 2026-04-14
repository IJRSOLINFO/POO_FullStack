import { MedicoController } from "../controller/medico.controller.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
export class MedicoView {
    static cadastrar() {
        try {
            const id = Number(prompt("Digite o ID do médico: "));
            const nome = prompt("Digite o nome do médico: ");
            const telefone = prompt("Digite o telefone do médico: ");
            const email = prompt("Digite o email do médico: ");
            const especialidade = prompt("Digite a especialidade do médico: ");
            const crm = prompt("Digite o CRM: Ex.:CRM-RN1234: ");
              MedicoController.criarCadastro(id, nome, telefone, email, especialidade, crm); //chama a ação de criar um novo médico no controller, passando os dados do médico coletados do usuário como parâmetros para criar um novo registro de médico no sistema.
        } catch (error) {
            console.error("Erro ao cadastrar médico:", error.message);
        }
        
            }

    static listarTodos() {
try {
    MedicoController.listar(); //chama a ação de listar todos os médicos no controller, permitindo que os dados dos médicos sejam exibidos de forma organizada para o usuário.
} catch (error) {
    console.error("Erro ao listar médicos:", error.message);
}
    }

    static listarPorId(){
        try {
        const id = Number(prompt("Digite o ID do médico que deseja listar: ")); //solicita ao usuário que digite o ID do médico que deseja listar, utilizando a função prompt para coletar a entrada do usuário e convertendo-a para um número.
        } catch (error) {
            console.error("Erro ao listar médico por id:", error.message);
        }   

    }
    static atualizar() {
try {
        const id = Number(prompt("Digite o ID do médico: "));
        const nome = prompt("Digite o nome do médico: ");
        const telefone = prompt("Digite o telefone do médico: ");
        const email = prompt("Digite o email do médico: ");
        const especialidade = prompt("Digite a especialidade do médico: ");
        const crm = prompt("Digite o CRM: Ex.:CRM-RN1234: ");
            MedicoController.atualizar(id, nome, telefone, email, especialidade); //chama a ação de criar um novo médico no controller, passando os dados do médico coletados do usuário como parâmetros para criar um novo registro de médico no sistema.
        } catch (error) {
            console.error("Erro ao atualizar o usuário:", error.message);
        }
    }
    static excluirTodos(){
        try {
            MedicoController.excluirTodos(); //chama a ação de excluir todos os médicos no controller, permitindo que todos os registros de médicos sejam removidos do sistema.
        } catch (error) {
            console.error("Erro ao excluir todos os médicos:", error.message);
        }

    }
    static excluirPorId(){
        try {
            const id = Number(prompt("Digite o ID do médico que deseja excluir: "));
            MedicoController.excluirPorId(id);
        } catch (error) {
            console.error("Erro ao excluir médico por id:", error.message);
        }
    }

}